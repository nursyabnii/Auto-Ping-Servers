const ping = require('ping');

// List of servers/computers to ping
const servers = [
    "190.1.1.107",
    "190.1.1.105",
    "190.1.7.83",
    "190.1.1.72",
    "190.1.1.24",
    "190.1.1.27",
    "190.1.1.71",
    "190.1.1.19",
    "190.1.1.73",
    "190.1.1.14",
    "190.1.1.25",
    "190.1.1.26",
    "190.1.1.10",
    "190.1.1.101",
    "190.1.4.13",
    "190.1.4.8",
    "190.1.4.11",
    "190.1.4.10",
    "190.1.4.9",
    "190.1.1.29"
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
