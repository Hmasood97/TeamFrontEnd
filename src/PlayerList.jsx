import React, { Component } from 'react';
import Abroon from "./AbroonNB.png"
import Hisham from "./HishamNutter.png"
import Haris from "./HarisNutter.png"
import Ahmad from "./AhmadNutter.png"
import Ibrahim from "./IbrahimNutter.png"
import Syed from "./SyedNutter.png"
import Ezan from "./EzanNutter.png"
import Aamir from "./AamirNutter.png"


class PlayerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
           players: [],
            isLoading: false
        };
    }
    //fetching the backenddata
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('http://localhost:8080/players')
            .then(response => response.json())
            .then(data => this.setState({players: data, isLoading: false }));
    }
    //adding the local images function based on the player.ID
    createImage(x) {
      if (x==1) {
        return (
         <img align = "left" src={Hisham} alt={this.props.name} width="200"/>
        )
      }
      else if (x==2) {
        return (
         <img align = "left" src={Abroon} alt={this.props.name} width="200"/>
        )
      }
     else if (x==3) {
       return (
        <img align = "left" src={Ibrahim} alt={this.props.name} width="200"/>
       )
     }
     else if (x==4) {
       return (
        <img align = "left" src={Haris} alt={this.props.name} width="200"/>
       )
     }
     else if (x==5) {
       return (
        <img align = "left" src={Ahmad} alt={this.props.name} width="200"/>
        
       )
     }
     else if (x==6) {
       return (
        <img align = "left" src={Syed} alt={this.props.name} width="200"/>
        
       )
     }

     else if (x==7) {
       return (
        <img align = "left" src={Aamir} alt={this.props.name} width="200"/>
        
       )
     }
     else if (x==8) {
       return (
        <img align = "left" src={Ezan} alt={this.props.name} width="200"/>
        
       )
     }
   }
    
   //where the table and header is made with the images
    render() {
   
        const { players, isLoading } = this.state;
        const i =1;
        if (isLoading) {
            return <p>Charging up...</p>;
        }
        return (
            <div>
              <p1>{players.map((Player) =>
                <div key={Player.id}>
                 <h4>{Player.firstName} {Player.lastName} # {Player.jerseyNumber}</h4> 
                 <h5> 
                 {this.createImage(Player.id)}
                 </h5>
                  <table align = "center" class = "tableone" >
                  <th>Category</th>
                  <th> Per Game </th>
                  <tbody>
                    <tr>
                     <td>Points</td>  
                     <td>{Player.points}</td>
                    </tr>
                    <tr>
                     <td>Assists</td>  
                     <td>{Player.assists}</td>
                    </tr>
                    <tr>
                     <td>Rebounds</td>  
                     <td>{Player.rebounds}</td>
                    </tr>
                    <tr>
                     <td>FG%</td>  
                     <td>{Player.fieldGoal}</td>
                    </tr>
                    <tr>
                     <td>3P%</td>  
                     <td>{Player.threePoint}</td>
                    </tr>
                    <tr>
                     <td>FT%</td>  
                     <td>{Player.freeThrows}</td>
                    </tr>
                    <tr>
                     <td>College</td>  
                     <td>{Player.collegePlayed}</td>
                    </tr>
                    <tr>
                     <td>height</td>  
                     <td>{Player.height}</td>
                    </tr>
                    
                    
                    
                  </tbody>
                  </table>
                   <br/>
                </div>
              )}</p1>
            </div>
          );
        }
      }
      
export default PlayerList