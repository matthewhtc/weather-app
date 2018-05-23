// find library React, install as dependency, and assign to var React. same with {component}
import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { fetchWeather } from '../actions/index'; 

// simply exporting the class, so we can use it in our main APP.JS
class SearchBar extends Component {

	/* refresher: to use state, we initialize the state object. 
	 * to initialize: set the property STATE to a plain .js object inside of the class's  
	 * constructor method. 
	 *
	 * also rmb: we are creating an element whereby the value of the input is set by the state
	 * of our component. 
	 */
	constructor(props) {
		super(props); 

		this.state = {term: ''}; 

		// find the context of onInputChange (refer to notes for explanation)
		this.onInputChange = this.onInputChange.bind(this); 
		this.onFormSubmit = this.onFormSubmit.bind(this); 
	}

	onInputChange(event) {
		// console.log(event.target.value); 
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		// prevent browser from trying to submit form at all. 
		event.preventDefault();

		// go and fetch weather data 
		this.props.fetchWeather(this.state.term); 

		// clear out search input
		this.setState({ term: '' }); 
	}

	render() { // must define render() when extending Component
		return (
			<form onSubmit={ this.onFormSubmit } className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favourite cities"
					className="form-control"
					// these next 2 parts will turn it into a controlled field. 
					/*
					 * just rmb this god awful pattern for now. not sure why. but maybe it'll make sense soon. 
					 * so, if smt changes, we use this.setState to set the component's state to something new. 
					 * then, from the component's new state, we set the value of the input to whatever. 
					 * */
					value={this.state.term} // input's value is coming from this.state.term
					onChange={this.onInputChange} // this is in a sense declarative b/c we are 'delcaring' that onChange is equal to this.onInputChange, without stating the steps, step by step. 
				/> 
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

/**
 * remember: this causes the actionCreator, whenver it gets called, to return and action; 
 * the action will flow through the middleware, and then the reducers inside of our redux app. 
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch); 
}

// null as first arg: "hey, I understand that Redux is maintainig some state, but this container
// just doesn't care about it at all. thanks, but we don't need any state."
// now, the function fetchWEather is available inside of props, and we can use it inside of the event listener. 
export default connect(null, mapDispatchToProps)(SearchBar); 