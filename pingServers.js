const ping = require('ping');

// List of servers/computers to ping
const servers = [
    "google.com",
    "youtube.com",
    "instagram.com",
    "192.168.1.1"
];

// Function to ping a server
async function pingServer(server) {
    try {
        const res = await ping.promise.probe(server);
        if (res.alive) {
            console.log(`${server} dapat terhubung`);
        } else {
            console.log(`${server} tidak dapat terhubung`);
        }
    } catch (error) {
        console.error(`Error pinging ${server}:`, error);
    }
}

// Function to ping all servers
async function pingAllServers() {
    for (const server of servers) {
        await pingServer(server);
    }
}

// Set an interval to ping servers continuously
const interval = 10000; // Interval time in milliseconds (10 seconds)
setInterval(pingAllServers, interval);

// Initial call to start the process immediately
pingAllServers();
