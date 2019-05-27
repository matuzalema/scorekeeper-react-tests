import Player from './Player';
import React from 'react';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  shallow(<Player />);
});
it('renders correct name', () => {
  const playerNamePassed = 'Ania';
  const playerComponent = shallow(<Player name={playerNamePassed} />);

  const playerNameRendered = playerComponent.find('.Player__name').text();

  expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
  const playerScorePassed = '23';
  const scoreComponent = shallow(<Player score={playerScorePassed} />);

  const playerScoreRendered = scoreComponent.find('.Player__score').text();
  const playerScoreRenderedInt = parseInt(playerScoreRendered, 10);

  expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').first();

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});

it('should call onPlayerScoreChange with -1 when plus button is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

  const plusButton = playerComponent.find('.Player__button').at(1);

  plusButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onPlayerRemove function when button remove is clicked', () => {
  const mockedOnPlayerScoreChange = jest.fn();
  const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerScoreChange} />);

  const removeButton = playerComponent.find('.Player__button_remove');

  removeButton.simulate('click');

  expect(mockedOnPlayerScoreChange).toBeCalledWith();
});