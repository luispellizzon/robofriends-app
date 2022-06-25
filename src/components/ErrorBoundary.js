import React,{Component} from 'react';

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state ={
            handleError:false
        };
    }
    componentDidCatch(error){
        return this.setState({handleError: true})
    }
    render(){
        if(this.state.handleError){
            return <h1>Ooops. Something went wrong!</h1>
        } 
        return this.props.children
    }

}

export default ErrorBoundary;