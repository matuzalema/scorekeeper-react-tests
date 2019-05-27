import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';
// import Player from './components/Player/Player';

it('renders without crashing', () => {
	shallow(<App />);
});

it('should update player score', () => {
	const appComponent = shallow(<App />);

	let players = [
		{
			name: 'Kunegunda',
			score: 5,
		}
	];

	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	onScoreUpdate(0, 5);
	const playersAfterUpdate = appComponent.state('players');
	expect(playersAfterUpdate[0].score).toEqual(10);

	const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
	onPlayerAdd('Ania');
	players = appComponent.state('players');

	expect(players.length).toEqual(2);
	expect(players[0].name).toEqual('Kunegunda');
	expect(players[0].score).toEqual(5);
});
