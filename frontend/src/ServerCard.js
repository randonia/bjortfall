import './ServerCard.css';

/**
 * @typedef Player
 * @property {String} name Player name
 */

/**
 * @typedef ServerData
 * @property {String} name Server name
 * @property {Boolean} password Whether the server is passworded
 * @property {Number} maxPlayers Maximum supported players
 * @property {Array<Player>} players Players in the server
 * 
 */

/**
 * Transforms raw server data into a normalized form
 * @param {String} serverType Type of server data, one of 'minecraft', 'valheim'
 * @param {Record<String,unknow>} serverData Raw server data to transform
 * @returns {ServerData}
 */
function transformServer(serverType, serverData) {
  switch (serverType) {
    case 'minecraft':
      return {
        maxPlayers: serverData.maxplayers,
        name: serverData.name,
        password: serverData.password,
        players: (serverData.players || []).map((player => ({ name: player.name }))),
      }
    case 'valheim':
      return {
        maxPlayers: serverData.maxplayers,
        name: serverData.name,
        password: serverData.password,
        players: (serverData.players || []).map((player => ({ name: player.name }))),
      }
    default:
      return serverData;
  }
}

function ServerCard({ serverType, server }) {
  console.log('props raw:', server);
  const data = transformServer(serverType, server);
  return (
    <div className="ServerCard">
      <div className="ServerCard-Type">{serverType}</div>
      <div className="ServerCard-Title"><u>{data.name}</u></div>
      <div className="ServerCard-Password">{data.password ? '🔒' : '🔓'}</div>
      <div className="ServerCard-PlayerCount">
        Players: {data.players.length}/{data.maxPlayers}
      </div>
      <div className="ServerCard-PlayerList">
        <ul>
          {data.players.map(player => <li key={`li-player-${player.name}`}>{player.name}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default ServerCard;
