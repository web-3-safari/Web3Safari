---
slug: Geodecentralization2
title: "Geographic Decentralization on Archway Part 2"
authors: [jl]
tags: [web3]
enableComments: true
---

# Web3 Safari: Geographic Decentralization on Archway Part 2
						
In our last post, we highlighted the criticality of geographic diversity amongst validator nodes within blockchain networks.
						
In this installment, we'll provide an insightful overview of the Web3 Safari validator setup on Archway, shedding light on the practical challenges faced and the innovative solutions implemented to ensure seamless operation in South Africa's dynamic landscape.
						
## The Challenges of Running a Validator in South Africa
						
Running a validator node in South Africa presents a myriad of unique challenges, demanding a strategic and adaptable operational approach. Let’s dissect some of these challenges:
				
-  Unpredictable Infrastructure: South Africa’s infrastructure can be unpredictable, with rolling blackouts country wide known as “Loadshedding” and a prevalent Cable theft issue posing significant hurdles to continues operation.			
-  Regulatory Uncertainties: Navigating regulatory landscapes add another layer of complexity, requiring careful adherence to evolving legal frameworks while maintaining operational efficiency
-  Environmental and Other External Factors: Environmental factors such as extreme weather conditions and other external factors can impact the reliability of validator operations. For example, South Africa is currently experiencing disruptions in its underwater internet cable infrastructure, where four of ten cables connecting it (and other african countries) to the rest of the world are encountering outages, further complicating internet connectivity and reliability.						


## The Web3 Safari Setup
 								
In response to these challenges, the Web3 Safari team has implemented a comprehensive and innovative setup tailored to the unique requirements of the South African landscape. Here's an overview of our setup:
 								
### Custom-built bare-metal server Specifications:
                                
 - Designed to withstand the rigors of South Africa’s operational environment, the server boasts high-performance components, including:
 - Intel 13th Gen Core i5-13400F CPU, ensuring optimal processing power for any network load 
 - Samsung 980 Pro 2TB NVMe SSD, providing fast and reliable storage for blockchain data
 - 4 x G.Skill Trident Z5 NEO 32GB DDR5 RAM sticks for a total of 128GB of high-speed memory for efficient node operation
 								
### Backup Power System:
 - **Sun Magic 10KW inverter + battery system**: Providing backup power in the event of outages, this system ensures uninterrupted operation during unforseen circumstances. The system, combined with an additional KOOL Energy 1.5KW portable inverter serving as a UPS between the server and the main inverter, has demonstrated over 80 hours of continuous operation for the server on battery power during testing.
 								
### Networking Configuration:
 - **Dual Connectivity**: Leveraging both a 100mbps fiber line and 5G mobile router, the setup ensures redundancy and reliability in connectivity, with plans for further enhancements including a 500mbps fibre line and a Starlink installation on the horizon
 								
### Backup and Redundancy:
 - **Full Node Backup**: Utilizing a Digital Ocean server as a backup node and unconditional peer for continuous network synchronization, the setup guarantees continuous resilience of the validator even against potentially extreme failures of our infrastructure.
 															
### Software Configuration:
 - **Operating System and software**: Configured as per Archway documentation, following best practices in the cosmos ecosystem such as utilization of Cosmovisor for seamless upgrades and maintenance.
						
### Monitoring Systems:
 - **Cloud-Based and On-Premises Monitoring**: To ensure the robustness of our validator setup, we’ve implemented a dual-monitoring approach. Our primary monitoring system, PANIC, operation on-premises, on a LattePanda 3 Delta 864 SBC. allowing us to swiftly address any potential issues. Additionally, we utilize TenderDuty, as a cloud-based monitoring system running on digital ocean, to supplement out on-premises solution. The combination ensures comprehensive coverage and reliability, empowering us to maintain peak performance and responsiveness for our validator node.
						
## Conclusion
						
The Web3 Safari validator setup exemplifies the innovative spirit and adaptability essential for navigating the complexities of geographic decentralization. By addressing the unique challenges of operating in South Africa, the team demonstrates a commitment to fostering resilience, security, and inclusivity with blockchain networks out of our home land in Africa! 

