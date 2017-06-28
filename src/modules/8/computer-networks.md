
[Source - http://www.ohio.edu](http://www.ohio.edu/people/piccard/mis300/netintro.htm "Permalink to Introduction to Computer Networks")

# Introduction to Computer Networks

  
[Sharing Resources][1]&nbsp;&nbsp;[Interconnections][2]&nbsp;&nbsp;[Protocols][3]&nbsp;&nbsp;[Infrastructure][4]

: The fundamental purpose of computer networks is to provide access to shared resources, most notably printers and data storage (both disk drives and tape drives). Local Area Networks (LANs) involve several primary components:

* Network interconnection (for example, copper wire, fiber optic cable, infrared, or radio). 
* Network Interface Circuitry (NIC) in the individual personal computers, connected to the network. This circuitry may be part of the system motherboard or it may be on a separate plug-in card. 
* The shared resources themselves, each with their own NIC connected to the network. 
* Software on the individual personal computers that uses the NIC to access the shared resources. This software is typically arranged to present the appearance to the rest of the operating system that these resources are directly connected. In the jargon, "emulating local disks and printers."
* Software on the shared resource that coordinates with the software on the individual machines to provide access to the shared resources for the users of the multiple individual personal computers. This software is typically running on a computer system ("the server") to which the shared resources are directly attached, and is a multi-user operating system. 

The most common case is for the server to be the same sort of personal computer hardware as the individual personal computers on the network (Intel or Macintosh). In this case, the operating system is called a "network operating system" to emphasize the difference from the single-user operating system of the personal computer. Novell is perhaps the most striking example of this approach. 

Alternatives include a laser printer with a microprocessor-controlled NIC that runs software to manage the printer as a shared resource (e.g., the JetDirect cards for HP laser printers), and using a full-blown general-purpose multi-user server, with an operating system like VMS or unix. Windows NT Server is perhaps more accurately described as an example of this latter class. 

* * *

: The network interconnection can be described in several ways:

* Speed: how many bits/sec can be transmitted through the network.
* Topology: bus, ring, or star. Some networks provide a logical bus or ring topology with a physical star topology (Token Ring is, as you might suspect, a logical ring, but is a physical star; twisted-pair ("10baseT") ethernet is logically a bus, but is usually a physical star, although Farallon "etherwave" devices permit daisy-chaining). 
* Arbitration mechanism: token-passing, collision-detection, guaranteed data rate, etc. 
* * *

: The software on the individual personal computers and the software on the server have to cooperate with each other to provide access to the shared resources. This is done by designing the software to use an agreed set of conventions (a "protocol") that is standardized so that multiple vendors can provide interoperable systems. 

There are several different network protocols in use, and they can co-exist on the same network interconnection if they are properly designed. For example, an ethernet network can simultaneously support general-purpose protocols, such as LAN Manager, DECnet, TCP/IP, AppleTalk, Novell, and at the same time special-purpose protocols, such as LAT and XNS. 

Protocols specify, for example, that each data packet will have a header that includes agreed numbers of bits specifying

* the sender's address
* the intended recipient's address
* the type of packet
* the length of the data segment in the packet

and so on. The protocols also specify the circumstances, if any, under which the recipient is to send an acknowledgment of receipt of the data packet. Some protocols include a sequence number that permits the recipient to re-assemble a longer message that has been split into parts, even if those parts are not delivered in the same order that they were sent. (This can easily happen in an overloaded local-area network, or in a complex wide-area network that includes alternative pathways connecting the two machines.)

* * *

: In addition to the servers and their clients, a network will usually include other electronic devices connected to the network signal cabling. 

* Some of this infrastructure is concerned with moving the data through the network, from the source machine to its destination.
    * Hubs
    * Routers
    * Gateways
    * Bridges
    * Switches
    * Terminal Servers
* Some of this infrastructure is concerned with maintaining dedicated databases of network information and providing that information to the clients and servers so that they can communicate.
    * Domain Name Server
    * DHCP Server
    * WINS Server to support Microsoft Network Clients (like DNS)

These electronics may be provided with their own front panel with control switches or keypad, or they may have dedicated connections for a dumb terminal to be used as a control console. More and more, however, they are designed for remote control, through the network. The standard protocol for accomplishing remote management of network infrastructure is called SNMP, "Simple Network Management Protocol."

* * *

[Return to top][5]&nbsp;&nbsp;&nbsp;[Return to MIS 300 Page][6]   

* * *

Dick Piccard revised this file (`http://oak.cats.ohiou.edu/~piccard/mis300/netintro.htm`) on September 17, 1998.

Please E-Mail comments or suggestions to "[`piccard@ohio.edu`][7]". 

* * *

[1]: http://www.ohio.edu#share
[2]: http://www.ohio.edu#connect
[3]: http://www.ohio.edu#protocol
[4]: http://www.ohio.edu#router
[5]: http://www.ohio.edu#top
[6]: http://www.ohio.edu/index.html
[7]: mailto:piccard%40ohio.edu

  