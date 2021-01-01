import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../Homepage/";
import Tab1 from "../Tab1/";
import Tab2 from "../Tab2/";
import Tab3 from "../Tab3/";
import Tab4 from "../Tab4/";
import Tab5 from "../Tab5/";
import axios from "axios";
import { PLANET_API } from "../../config/remoteUrl.js";
import { VEHICLE_API } from "../../config/remoteUrl.js";
import { AUTH_TOKEN_URL } from "../../config/remoteUrl.js";
import { FIND_FALCONE_API } from "../../config/remoteUrl.js";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planets: [],
            selectedPlanets: [],
            vehicles: [],
            selectedVehicles: [{}, {}, {}, {}],
            timeTaken: 0,
            result: [],
        };
        this.handlePlanetClick = this.handlePlanetClick.bind(this);
        this.handlePlanetClose = this.handlePlanetClose.bind(this);
        this.handleVehicleClick = this.handleVehicleClick.bind(this);
        this.getToken = this.getToken.bind(this);
        this.findFalcone = this.findFalcone.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    getPlanetsData() {
        axios
            .get(PLANET_API)
            .then((res) => {
                const data = res.data;
                this.setState({ planets: data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getVehiclesData() {
        axios
            .get(VEHICLE_API)
            .then((res) => {
                const data = res.data;
                this.setState({ vehicles: data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    getToken() {
        axios.defaults.headers.common["Accept"] = "application/json";
        axios
            .post(AUTH_TOKEN_URL)
            .then((res) => {
                this.findFalcone(res.data.token);
            })
            .catch((error) => {
                console.log(error);
                this.clearData();
            });
    }

    findFalcone(token) {
        var planet_names = [
            this.state.selectedPlanets[0].name,
            this.state.selectedPlanets[1].name,
            this.state.selectedPlanets[2].name,
            this.state.selectedPlanets[3].name,
        ];
        var vehicle_names = [
            this.state.selectedVehicles[0].data.name,
            this.state.selectedVehicles[1].data.name,
            this.state.selectedVehicles[2].data.name,
            this.state.selectedVehicles[3].data.name,
        ];

        axios.defaults.headers.common["Accept"] = "application/json";
        axios.defaults.headers.common["Content-Type"] = "application/json";
        axios
            .post(FIND_FALCONE_API, {
                token: token,
                planet_names: planet_names,
                vehicle_names: vehicle_names,
            })
            .then((res) => {
                this.setState({ result: res.data });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    clearData() {
        this.setState({ result: [] });
        this.setState({ timeTaken: 0 });
        this.setState({ selectedPlanets: [] });
        this.setState({ selectedVehicles: [{}, {}, {}, {}] });
        this.getVehiclesData();
    }

    handlePlanetClick = (key) => {
        var data = this.state.planets[key];
        if (
            Object.keys(this.state.selectedPlanets).length < 4 &&
            !this.state.selectedPlanets.includes(data)
        ) {
            this.setState({ selectedPlanets: [...this.state.selectedPlanets, data] });
        } else if (this.state.selectedPlanets.includes(data)) {
            alert("Already Selected !! \n Please select some other planet");
        } else {
            alert("You cannot select more than 4 planets !!");
        }
    };

    handlePlanetClose = (index) => {
        const list = this.state.selectedPlanets;
        list.splice(index, 1);
        this.setState({ list });
    };

    handleVehicleClick = (vehicleIndex, planetIndex) => {
        var data = this.state.vehicles[vehicleIndex];
        if (Object.keys(this.state.selectedVehicles[planetIndex]).length !== 0) {
            /*Incrementing Count of Previously Selected Vehicle*/
            var prevVehicleIndex = this.state.vehicles.findIndex(
                (i) => i.name === this.state.selectedVehicles[planetIndex].data.name
            );
            var prevData = this.state.vehicles[prevVehicleIndex];
            prevData.total_no = prevData.total_no + 1;
            this.setState(({ vehicles }) => ({
                vehicles: [
                    ...vehicles.slice(0, prevVehicleIndex),
                    {
                        ...vehicles[prevVehicleIndex],
                        prevData,
                    },
                    ...vehicles.slice(prevVehicleIndex + 1),
                ],
            }));
        }
        /*Updating Selected Vehicle State*/
        this.setState(({ selectedVehicles }) => ({
            selectedVehicles: [
                ...selectedVehicles.slice(0, planetIndex),
                {
                    ...selectedVehicles[planetIndex],
                    data,
                },
                ...selectedVehicles.slice(planetIndex + 1),
            ],
        }));
        /*Decrementing Count of Previously Selected Vehicle*/
        data.total_no = data.total_no > 0 ? data.total_no - 1 : 0;
        this.setState(({ vehicles }) => ({
            vehicles: [
                ...vehicles.slice(0, planetIndex),
                {
                    ...vehicles[planetIndex],
                    data,
                },
                ...vehicles.slice(planetIndex + 1),
            ],
        }));

        this.state.timeTaken =
            this.state.timeTaken +
            this.state.selectedPlanets[planetIndex].distance / data.speed;
    };

    componentDidMount() {
        this.getVehiclesData();
        this.getPlanetsData();
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                    <Route path="/tab1">
                        <Tab1 />
                    </Route>
                    <Route path="/tab2">
                        <Tab2
                            planets={this.state.planets}
                            selectedPlanets={this.state.selectedPlanets}
                            onClick={this.handlePlanetClick}
                            onClose={this.handlePlanetClose}
                        />
                    </Route>
                    <Route path="/tab3">
                        <Tab3 vehicles={this.state.vehicles} />
                    </Route>
                    <Route path="/tab4">
                        <Tab4
                            selectedPlanets={this.state.selectedPlanets}
                            vehicles={this.state.vehicles}
                            selectedVehicles={this.state.selectedVehicles}
                            onClick={this.handleVehicleClick}
                            timeTaken={this.state.timeTaken}
                            find={this.getToken}
                        />
                    </Route>
                    <Route path="/tab5">
                        <Tab5
                            time={this.state.timeTaken}
                            res={this.state.result}
                            clear={this.clearData}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
