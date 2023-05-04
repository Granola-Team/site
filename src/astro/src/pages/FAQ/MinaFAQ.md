---
layout: '../../layouts/FAQLayout.astro'
title: Mina FAQ
draft: false
---

# Mina FAQ

Here are answers to frequently asked questions about the Mina protocol and why
we at Granola use Mina.


### Q: What is a 'zkApp'?

A: 'zkApp' is the name for [https://en.wikipedia.org/wiki/Smart_contract](smart contracts) on the Mina blockchain.


### Q: In what language are zkApps developed?

At present, zkApps are written with either
[https://github.com/o1-labs/snarkyjs](SnarkyJS) (TypeScript/JavaScript) or
[https://github.com/o1-labs/snarky](Snarky) (OCaml).

It is possible to create new languages for writing zkApps.


### Q: Is Mina EVM compatible?

A: No. The on-chain decentralized apps of the Mina protocol (called "zkApps")
are unlike those of Ethereum dApps, and they are not compatible with the
Ethereum Virtual Machine (EVM).

See this
[https://docs.minaprotocol.com/zkapps/zkapps-for-ethereum-developers](page in
the official Mina Protocol documentation) to understand more about the
differences between the Mina Protocol and the Ethereum blockchain.


### Q: Does the Mina community plan to create a 'zkEVM'?

A 'zkEVM' entry exists on the [https://minaprotocol.com/mina-roadmap](the
official roadmap published by the Mina Foundation), but little else is known.
It is not yet defined what, exactly, a 'zkEVM' is.


<!--
### Q: Why should developers build on Mina instead of Ethereum?

- Mina Protocol supports zero-knowledge proofs and zero-knowledge applications (zkApps) natively. This put the power of ZK tech in the hands of developers since day one.
- Mina is on the cutting edge of ZK tech, being the first to implement some of the revolutionary cryptographic primitives.
- Mina is quickly gaining market share, but is still comparatively small. The chances of developing a major application on Mina are much higher than on Ethereum.

#### *Why should developers build on Mina and not Aleo?*

#### *Why should developers build on Mina and not Polygon?*

#### *Can you provide a very succinct and relatable explanation of zero knowledge?*

- Zero Knowledge is a new cryptographic technology that allows an untrusted party to verify that it has some knowledge or can pass some constraint without actually revealing the information behind that verification.
- A great example would be a secured building with a Zero Knowledge key card access door. The door would employ Zero Knowledge techniques to verify to the internal system that the cardholder is authorized to access the building without revealing which of the set of authorized users they are.

#### *What does it mean when you say Mina is a “succinct blockchain”?*

- The Mina blockchain is considered to be "succinct." this means that a node on the network doesn't need to replay the entire transaction history of the network in order to verify the current state of the chain
- It also means that any member on the network only needs to maintain up to *k* blocks of history in its state at any time, where *k* is currently set to 290
- This is accomplished by using recursive composition of Zero Knowledge proofs that are generated with every block, guaranteeing a constant, size, and hence, a succinct chain.

It's validity can be represented by a 22kB zk-SNARK

#### *How is Mina’s blockchain only 22kB?*

- Mina's blockchain is unique in that it maintains a constant size of 22kB. It accomplishes this by recursively composing Zero Knowledge proofs (TODO: add more // I added the paragraph below and we can work on combining/mixing)
- Mina's blockchain is small in size because it uses a novel consensus mechanism called "Proof of Stake Snapshots" that reduces the amount of data that needs to be stored by each node in the network. Essentially Mina Protocol takes the equivalent of a digital snapshot of the previous blocks and then puts that “photo” of the previous blocks together with the new transaction. This mechanism allows Mina to produce small block sizes and reduce the amount of data that must be stored to maintain the security and integrity of the blockchain. Additionally, Mina uses a compact Merkle tree data structure to store the blockchain state, further reducing the storage requirements for each node.

That's not the whole story. The zk-SNARK which represents the validity of all transitions of the Mina blockchain is 22kB. The totality of blocks on Mina is much larger, but a block producer does not need to retain all the blocks to particiapte in consensus. They only need to the most recent 290 blocks.

#### *What are some top use case examples for zkApps?*

zkApps are a type of blockchain-based application that allows users to make transactions without revealing sensitive information. Some of the top use case examples for zkApps include:

1. Financial Services: zkApps can be used for secure and private financial transactions such as peer-to-peer lending, remittances, taxes, proof of solvency, complience, and insurance.
2. Identity Verification: zkApps can be used for secure and private identity verification, eliminating the need for sensitive information to be shared with third-party entities.
3. Supply Chain Management: zkApps can be used to improve the transparency and efficiency of supply chain operations, enabling secure and private tracking of goods and information.
4. Healthcare: zkApps can be used for secure and private electronic medical records and telemedicine applications, protecting sensitive patient information.
5. Gaming: zkApps can be used for secure and private online gaming, enabling players to make transactions without revealing their identity or personal information.
6. Scalability: zero-knowledge tech in general allows for processing many transactions off-chain and simply sumbitting a proof that they were processed correctly, i.e. rollup systems with validity proofs.

Overall, zkApps have the potential to revolutionize many industries by enabling secure and private transactions without sacrificing security or transparency.
-->