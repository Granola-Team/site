---
title: FAQ
layout: ../layouts/content.astro
draft: false
---

### Mina FAQ

some frequently asked questions about the MINA protocol and why we use it

# *Why should developers build on Mina and not Ethereum?*

# *Why should developers build on Mina and not Aleo?*

# *Why should developers build on Mina and not Polygon?*

# *Can you provide a very succinct and relatable explanation of zero knowledge?*
- Zero Knowledge is a new cryptographic technology that allows an untrusted party to verify that it has some knowledge or can pass some constraint without actually revealing the information behind that verification.
- A great example would be a secured building with a Zero Knowledge key card access door. The door would employ Zero Knowledge techniques to verify to the internal system that the cardholder is authorized to access the building without revealing which of the set of authorized users they are. 

# *What is a zkApp?*

# *What does it mean when you say Mina is a “succinct blockchain”?*
- The Mina blockchain is considered to be "succinct." this means that a node on the network doesn't need to replay the entire transaction history of the network in order to verify the current state of the chain
- It also means that any member on the network only needs to maintain up to *k* blocks of history in its state at any time, where *k* is currently set to 290
- This is accomplished by using recursive composition of Zero Knowledge proofs that are generated with every block, guaranteeing a constant, size, and hence, a succinct chain.

# *How is Mina’s blockchain only 22kB?*
- Mina's blockchain is unique in that it maintains a constant size of 22kB. It accomplishes this by recursively composing Zero Knowledge proofs (TODO: add more)

# *What language are zkApps developed in? Is it hard to learn?*
- ZkApps are typically developed in the programming language Solidity, which is a contract-oriented programming language for writing smart contracts on the Ethereum platform. Solidity has its own unique syntax and features that one needs to learn. Usually programmers and software engineers learn Javascript/TypeScript before moving onto more difficult languages, such as Solidity.
- Mina recognized the challenges with building ZkApps with Solidity and has developed SnarkyJS. With Mina, zkApps are written in TypeScript using SnarkyJS. SnarkyJS is a TypeScript library for writing smart contracts based on zero-knowledge proofs for the Mina Protocol. It is included automatically when creating a new project using the Mina zkApp CLI.
- This link directly from Mina (https://docs.minaprotocol.com/zkapps/how-to-write-a-zkapp) provides a guide on how to write a ZkApp in Mina, including the steps for setting up the development environment, writing and testing the smart contract code, deploying the ZkApp to the Mina network, and using the ZkApp from a client. The guide also provides information on the tools and resources available for building and deploying ZkApps on Mina. Overall, the guide is intended to help developers get started with writing ZkApps on Mina, and to provide a comprehensive introduction to the concepts and tools required for building and deploying ZkApps on the Mina blockchain.

# *Is Mina EVM compatible?*

# *Does Mina have plans for a zkEVM?*

# *What are some top use case examples for zkApps?*