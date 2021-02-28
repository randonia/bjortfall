const Gamedig = require('gamedig');

const MOCK_DATA = {
  minecraft: {"name":"Hello and welcome to MC","map":"","password":false,"raw":{"vanilla":{"name":"","map":"","password":false,"raw":{"description":{"text":"Hello and welcome to MC"},"players":{"max":10,"online":1,"sample":[{"id":"5179b2c4-c402-4f7e-805d-4d9ba772e539","name":"BrootSoCute"}]},"version":{"name":"1.16.5","protocol":754}},"maxplayers":10,"players":[{"name":"BrootSoCute","raw":{"id":"5179b2c4-c402-4f7e-805d-4d9ba772e539"}}],"bots":[],"connect":"192.168.86.134:25565","ping":3},"gamespy":{"name":"Hello and welcome to MC","map":"","password":false,"raw":{"playerTeamInfo":{"":[{"player":"BrootSoCute"}]},"hostname":"Hello and welcome to MC","gametype":"SMP","game_id":"MINECRAFT","version":"1.16.5","plugins":"","map":"world","numplayers":"1","maxplayers":"10","hostport":"25565","hostip":"127.0.1.1"},"maxplayers":10,"players":[{"name":"BrootSoCute","raw":{}}],"bots":[],"connect":"192.168.86.134:25565","ping":2}},"maxplayers":10,"players":[{"name":"BrootSoCute","raw":{}}],"bots":[],"connect":"192.168.86.134:25565","ping":0},
  valheim: {"name":"Bjortfall","map":"Bjortfall","password":true,"raw":{"protocol":17,"folder":"valheim","game":"","appId":892970,"numplayers":0,"numbots":0,"listentype":"d","environment":"l","secure":0,"version":"1.0.0.0","steamid":"90143487359760385","tags":"0.146.11"},"maxplayers":64,"players":[],"bots":[],"connect":"127.0.0.1:2456","ping":6},
};

async function getAllServers() {
  return {
    minecraft: MOCK_DATA.minecraft,
    valheim: MOCK_DATA.valheim,
  };
}

module.exports = {
  getAllServers,
};
