import axios from 'axios';

const statsApi = 'https://statsapi.web.nhl.com/api/v1';

const currentSeason = '20212022';

// const getSearchedPlayers = async (userSearch) => {
//   const search = userSearch.replace(/\s/g, '%20');
//   const searchCall = axios.get(`https://suggest.svc.nhl.com/svc/suggest/v1/minplayers/${search}`);
// };

// export default getSearchedPlayers;

const getCurrentStats = async (playerId) => {
  const call = await axios.get(`${statsApi}/people/${playerId}/stats?stats=statsSingleSeason&season=${currentSeason}`);
  return call.data.stats[0].splits[0].stat;
};

const getCurrentInfo = async (playerId) => {
  const call = await axios.get(`${statsApi}/people/${playerId}`);
  return call.data.people[0];
};
const getRecentGames = async (playerId) => {
  const call = await axios.get(`${statsApi}/people/${playerId}/stats?stats=gameLog&season=${currentSeason}`);
  const gameIndex = call.data.stats[0].splits;
  return [gameIndex[0], gameIndex[1], gameIndex[2]];
};

export { getCurrentStats, getCurrentInfo, getRecentGames };
