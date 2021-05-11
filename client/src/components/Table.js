import React,{Component} from "react"
import User from "./User"
import API from "../utils/API"
class Table extends Component {
    state = {
        search: "",
        result: [],
        nameorder: [],
        emailorder: []
    };
    // When this component mounts
    componentDidMount = () => {
        API.getEmployees()
            .then(res => this.setState({ result: res.data.results}))
            .catch(err => console.log(err));
    }

    handleSubmitSortUser = event => {
        event.preventDefault()
        if (`${this.state.nameorder}`=== ""|| `${this.state.nameorder}` === "descending") {
            this.setState({
                nameorder:"ascending"
            })
            const sortUser = this.state.result.sort((x,y) => {
                let nameX = x.name.last;
                let nameY = y.name.last;
                if (nameX < nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: sortUser
            })
        } 
        else if (`${this.state.nameorder}` === "ascending"){
            this.setState({
                order: "descending"
            })
            const sortUser = this.state.result.sort((x,y) => {
                let nameX = x.name.last;
                let nameY = y.name.last;
                if (nameX > nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: sortUser
            })
        }
    }

    handleSubmitSortEmail = event => {
        event.preventDefault()
        if (`${this.state.emailorder}`=== ""|| `${this.state.emailorder}` === "descending") {
            this.setState({
                emailorder:"ascending"
            })
            const sortEmail = this.state.result.sort((x,y) => {
                let nameX = x.email;
                let nameY = y.email;
                if (nameX < nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: sortEmail
            })
        } 
        else if (`${this.state.emailorder}` === "ascending"){
            this.setState({
                emailOrder: "descending"
            })
            const sortEmail = this.state.result.sort((x,y) => {
                let nameX = x.email;
                let nameY = y.email;
                if (nameX > nameY) {
                    return -1
                }
                return 0;
            });
            this.setState({
                result: sortEmail
            })
        }
    }

    render() {
        return (
            <div class="tablewrap">
                <table id="table" className="table table-striped table-hover table-condensed">
                    <thead>
                        <tr>
                            <th className="pointerName" onClick={this.handleSubmitSortUser}>
                                Name ↕
                            </th>
                            <th className="pointerName" onClick={this.handleSubmitSortEmail}>
                                Email ↕
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Role 
                            </th>
                        </tr>
                    </thead>
                  <User results={this.state.result} />
                </table>
            </div>
        )
    }
}

export default Table;