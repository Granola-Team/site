---
layout: '../../layouts/FAQLayout.astro'
title: On-Chain Voting Results for Mina MIPs
---

# On-Chain Voting Results for [MIPs](https://github.com/MinaProtocol/MIPs)

This article details the calculation of Mina's on-chain voting results.

Equipped with the tools and knowledge, anyone can independently verify
Granola's code, logic, and results. We always strive for correctness in our
code and exhaustively test.

All the code for this project is open source ❤️ and available on
[GitHub](https://github.com/Granola-Team/mina-on-chain-voting).

Find an issue or a bug? Have a question or suggestion? We'd love to get your
[feedback](https://docs.google.com/forms/d/e/1FAIpQLSeKoyUIVU3OrJ7hkakwHnOeWz9R8gRe-pUeduXeMyfFsmW6iQ/viewform?pli=1)!

## Calculation of Mina's On-Chain Voting Results

We will describe in detail how to calculate the results of Mina's on-chain
stake-weighted voting!

## Overview

At a high level, we will

<ol>
  <li>
    Obtain the <i>next staking ledger</i> of the <i>next</i> voting epoch
    <ul>
      <li>
        The results are calculated using the <i>staking ledger</i> of epoch 55
      </li>
    </ul>
  </li>
  <li>
    Calculate aggregated voter stake
    <ul>
      <li>
        Sum all delegations to each voting public key minus any overriding votes.
      </li>
      <li>
        Voter stake weight is calculated with respect to the total <i>voting</i> stake
      </li>
    </ul>
  </li>
  <li>
    Obtain transaction data for the voting period, need <i>start</i> and <i>end</i> times</li>
  <li>
    Filter the voting (self) transactions, i.e. those with <code>source = receiver</code>
  </li>
  <li>
    Base58 decode the <code>memo</code> field of all votes
  </li>
  <li>
    Calculate yes/no weight
    <ul>
      <li>
        Sum yes/no vote stakes
      </li>
      <li>
        Divide by the total <i>voting stake</i>
      </li>
    </ul>
  </li>
</ol>

## How to use this document

There are several appropriate levels of engagement with this documentation.
Readers are welcome to (from the highest level of technical knowledge/effort
required to the least):

- Run a local archive node (the way Granola does it for the dashboard)
  - Query local PostgreSQL database for all relevant ledger and transaction data
- Export next staking ledger and hash from local mina daemon
  - Get transaction data via public GraphQL queries
- Download staking ledger from
  [Granola-Team/mina-ledger](https://github.com/Granola-Team/mina-ledger/tree/main/mainnet),
  [zkvalidator/mina-graphql-rs](https://github.com/zkvalidator/mina-graphql-rs/tree/main/data/epochs),
  or [Mina Explorer's Data Archive](https://docs.minaexplorer.com/minaexplorer/data-archive)
- Write an independent program in your favorite language implementing the calculation steps
- Just try a few queries
  - Try [Altair GraphQL browser extension](https://altairgraphql.dev/)
  - Try [Mina Explorer GraphiQL GUI](https://graphql.minaexplorer.com/)
- Generate a report using the [`mina_voting`
  utility](https://github.com/Granola-Team/mina-utils/tree/main/scripts/voting-results)
- Simply read along and learn

## Where to obtain the data

#### Staking ledgers

- Export from a local daemon
- [Granola-Team/mina-ledger](https://github.com/Granola-Team/mina-ledger/tree/main/mainnet)
- [zkvalidator/mina-graphql-rs](https://github.com/zkvalidator/mina-graphql-rs/tree/main/data/epochs)
- [Mina Explorer Data Archive](https://docs.minaexplorer.com/minaexplorer/data-archive)

#### Blocks and transactions

- Run your own archive node
  - [Docker](https://github.com/MinaProtocol/mina/tree/develop/dev)
  - [Build from source](https://github.com/MinaProtocol/mina/blob/develop/README-dev.md)
  - [Build from deb packages](https://docs.minaprotocol.com/node-operators/generating-a-keypair)
  - [Build from source with nix flakes](https://github.com/MinaProtocol/mina/blob/develop/nix/README.md)
- [Mina Explorer GraphiQL GUI](https://graphql.minaexplorer.com)

## Results Calculation Instructions

We calculate the results of [MIP3](https://mina.vote/proposal/3/results) and
[MIP4](https://mina.vote/proposal/4/results) voting

- MIP3 Start: *5/20/23 at 6:00 AM UTC* (Epoch 53, Slot 2820)
- MIP3 End: *5/28/23 at 6:00 AM UTC* (Epoch 53, slot 6660)

- MIP4 Start: *5/20/23 at 6:00 AM UTC* (Epoch 53, Slot 2820)
- MIP4 End: *5/28/23 at 6:00 AM UTC* (Epoch 53, slot 6660)


| Data | Value |
|:-:|:-:|
| *Epoch* | `53` |
| *Keyword* | `MIP3, MIP4` |
| *Start time* | `May 20, 2023 06:00 UTC` |
| *End time* | `May 28, 2023 06:00 UTC` |

## Calculation steps

### Obtain staking ledger

Since we are calculating the results for MIP3 and MIP4 voting (epoch 53), we
need the *next staking ledger* of the *next* epoch, i.e. the *staking ledger*
of epoch 55.

<ol type="a">
  <li>
    If you are not running a daemon locally, you will first need the ledger
    <i>hash</i>. Use the query

<pre><code>
query NextLedgerHash {
  blocks(query: {canonical: true, protocolState: {consensusState: {epoch: 54}}}, limit: 1) {
    protocolState {
      consensusState {
        nextEpochData {
          ledger {
            hash
          }
        }
        epoch
      }
    }
  }
}
</code></pre>

<pre><code>
response = {
  "data": {
    "blocks": [
      {
        "protocolState": {
          "consensusState": {
            "epoch": 54,
            "nextEpochData": {
              "ledger": {
                "hash": "jw8dXuUqXVgd6NvmpryGmFLnRv1176oozHAro8gMFwj8yuvhBeS"
              }
            }
          }
        }
      }
    ]
  }
}
</code></pre>

Extract the value corresponding to the deeply nested <code>hash</code> key

<pre><code>
response['data']['blocks'][0]['protocolState']['consensusState']['nextEpochData']['ledger']['hash']
</code></pre>

</li>
<li>
  Now that we have the appropriate ledger hash, we can acquire the
  corresponding staking ledger, in fact, the <i>next staking ledger</i> of
  epoch 54, via

<pre><code>
wget https://raw.githubusercontent.com/Granola-Team/mina-ledger/main/mainnet/jw8dXuUqXVgd6NvmpryGmFLnRv1176oozHAro8gMFwj8yuvhBeS.json -O path/to/ledger.json
</code></pre>

You can use any of the following sources (extra credit: use them all and check diffs)
<ol type="i">
  <li>
    <a href="https://docs.minaexplorer.com/minaexplorer/data-archive">
      Mina Explorer’s data archive
    </a>
  </li>
  <li>
    <a href="https://github.com/zkvalidator/mina-graphql-rs/blob/main/data/epochs/">
      Zk Validator's mina-graphql-rs repo
    </a>
  </li>
  <li>
    <a href="https://github.com/Granola-Team/mina-ledger/tree/main/mainnet">
      Granola’s mina-ledger repo
    </a>
  </li>
<li>
  If you’re running a local daemon, you can export the next staking ledger (while we are in epoch 54) by

<pre><code>
mina ledger export next-staking-ledger > path/to/ledger.json
</code></pre>

and confirm the hash using

<pre><code>
mina ledger hash --ledger-file path/to/ledger.json
</code></pre>

This calculation may take several minutes!

</li></ol></ol>

### Aggregate voting stake

<ol type="a">
  <li>
    Calculate each voter's <i>stake</i> from the staking ledger. Aggregate all delegations to each voter (by default, an account is delegated to itself)

<pre><code>
agg_stake = {}
delegators = set()

for account in ledger:
    pk = account['pk']
    dg = account['delegate']
    bal = Decimal(account['balance'])

    # pk delegates
    if pk != dg:
        delegators.add(pk)

    try:
        agg_stake[dg] += bal
    except:
        agg_stake[dg] = bal
</code></pre>

  </li>
  <li>
    Drop delegator votes

<pre><code>
for d in delegators:
    try:
        del agg_stake[d]
    except:
        pass
</code></pre>

  </li>
  <li>
    Now <code>agg_stake</code> is a Python dict containing each voter's aggregated stake
  </li>
</ol>

### Obtain and parse votes

To obtain all MIP3 and MIP4 votes, we need to get all transactions corresponding to the voting period (votes are just special transactions after all). It would be nice to be able to prefilter the transactions more and only fetch what is required, but since `memo` fields are *base58 encoded* and *any capitalization of the keyword is valid*, prefiltering will be complex and error-prone.

<ol type="a">
  <li>
    Multiple data sources
    <ol type="i">
      <li>
        Run a local archive node
      </li>
      <li>
        Mina Explorer has
        <a href="https://docs.minaexplorer.com/minaexplorer/bigquery-public-dataset">
          BigQuery
        </a>,
        <a href="https://docs.minaexplorer.com/minaexplorer/graphql-getting-started">
          GraphQL
        </a>, and
        <a href="https://docs.minaexplorer.com/rest-api/ref">
          REST
        </a>
        APIs
      </li>
    </ol>
  </li>
  <li>
    Obtain the unique <i>voting transactions</i>
    <ol type="i">
      <li>
        A <i>vote</i> is a transaction satisfying:
        <ol>
          <li>
            <code>kind = PAYMENT</code>
          </li>
          <li>
            <code>source = receiver</code>
          </li>
          <li>
            <i>Valid</i> <code>memo</code> field (either <code>mip3</code> or <code>no mip3</code>)
          </li>
        </ol>
      </li>
      <li>
        Fetch all transactions for the voting period
        <ol>
          <li>
            To avoid our requests getting too big and potentially timing out, we will request the transactions from each block individually
          </li>
          <li>
            Block production varies over time; sometimes many blocks are produced in a slot, sometimes no blocks are produced. A priori, we do not know the exact block heights which constitute the voting period. We fetch all <i>canonical</i> block heights for the voting period, determined by the <i>start</i> and <i>end</i> times
<pre><code>
query BlockHeightsInVotingPeriod {
  blocks(query: {canonical: true, dateTime_gte: "2023-05-20T6:00:00Z", dateTime_lte: "2023-05-28T06:00:00Z"}, limit: 7140) {
    blockHeight
  }
}
</code></pre>

The max number of slots, hence blocks, in an epoch is `7140`. The response in includes block heights `253078` to `255481`

<pre><code>
{
  "data": {
    "blocks": [
      {
        "blockHeight": 255481
      },
      ...
      {
        "blockHeight": 253078
      }
    ]
  }
}
</code></pre>
</li>
<li>
  For each canonical block height in the voting period, query the block’s <i>PAYMENT</i> transactions (votes are payments)

<pre><code>
query TransactionsInBlockWithHeight($blockHeight: Int!) {
  transactions(query: {blockHeight: $blockHeight, canonical: true, kind: "PAYMENT"}, sortBy: DATETIME_DESC, limit: 1000) {
    blockHeight
    memo
    nonce
    receiver {
      publicKey
    }
    source {
      publicKey
    }
  }
}
</code></pre>

where `$blockHeight` is substituted with each of the voting period’s canonical block heights (automation is highly recommended). Again, we include a limit which far exceeds the number of transactions in any block so we don’t accidentally get short-changed by a default limit. This process will take several minutes if done sequentially. Performance improvements are left as an exercise to the reader.

For example, the response for block `216063`

<pre><code>
{
  "data": {
    "transactions": [
      {
        "blockHeight": 255481,
        "memo": "E4YM2vTHhWEg66xpj52JErHUBU4pZ1yageL4TVDDpTTSsv8mK6YaH",
        "nonce": 367551,
        "receiver": {
          "publicKey": "B62qjYanmV7y9njVeH5UHkz3GYBm7xKir1rAnoY4KsEYUGLMiU45FSM"
        },
        "source": {
          "publicKey": "B62qre3erTHfzQckNuibViWQGyyKwZseztqrjPZBv6SQF384Rg6ESAy"
        }
      },
      ...
      {
        "blockHeight": 255481,
        "memo": "E4YM2vTHhWEg66xpj52JErHUBU4pZ1yageL4TVDDpTTSsv8mK6YaH",
        "nonce": 105533,
        "receiver": {
          "publicKey": "B62qkiF5CTjeiuV1HSx4SpEytjiCptApsvmjiHHqkb1xpAgVuZTtR14"
        },
        "source": {
          "publicKey": "B62qoXQhp63oNsLSN9Dy7wcF3PzLmdBnnin2rTnNWLbpgF7diABciU6"
        }
      }
    ]
  }
}
</code></pre>

Notice the base58 encoded `memo` field

</li>
              <li>
                Concatenate transactions for all canonical blocks in the voting period
              </li>
            </ol>
          </li>
          <li>
            Filter the votes
            <ol>
              <li>
                <code>memo.lower()</code> <i>exactly equal</i> to <code>mip3</code> or <code>no mip3</code>
              </li>
              <li>
                <code>source = receiver</code> (self transaction)
              </li>
            </ol>
          </li>
            <li>
              The memo field is base58 encoded
            </li>
          <li>
            If there are multiple votes associated with a single public key, only the <i>latest</i> vote is counted; <i>latest</i> being defined:
          </li>
          <ol>
            <li>
              For multiple votes from the same account across several blocks, take the vote in the highest block.
            </li>
            <li>
              For multiple votes from the same account in the same block, take the vote with the highest nonce.
            </li>
          </ol>
        </ol>
      </li>
    </ol>
  </li>
</ol>

### Calculate weighted voting results

<ol type="a">
  <li>
    Sum all aggregated voter stake to get the <i>total voting stake</i>
  </li>
  <li>
    For each delegate, start with their total stake, and subtract the balances of accounts that delegate to them with an overriding vote
  </li>
  <li>
    Divide yes/no vote stakes by the total voting stake
  </li>
</ol>

### Adjust Votes and Voting Stake with Non-Delegating Voters
Find all votes made by a delegating account, and subtract their account balance from the final voting stake if they disagree with their delegate
<pre><code>
delegating_stake = {}
delegating_votes = {}
for vote in votes:
    if vote.pk in delegators:
        delegating_stake[vote.pk] = accounts[vote.pk]['balance']
        delegating_votes[vote.pk] = vote.memo
for vote in delegating_votes
    delegate_vote = votes[accounts[pk]['delegate']]
    if against(delegate_vote) and for(vote) and pk not in delegating_votes:
        no_stake -= delegating_stake[vote.pk]
    else if for(delegate_vote) and  against(vote) and pk not in delegating_votes:
        yes_stake -= delegating_stake[vote.pk]
</code></pre>

Check agreement with the voting results dashboard and/or `@trevorbernard`'s verification scripts

### Vote Verification Scripts

MIP3: https://gist.github.com/trevorbernard/ec11db89bb9079dd0a01332ef32c0284
MIP4: https://gist.github.com/trevorbernard/928be21e8e1d9464c3a9b2453d9fd886

</ol>
</li>
</ol>

## MIP3 and MIP4 Voting Results

[Granola's MIP3 results dashboard](https://www.mina.vote/proposal/3/results)

[Granola's MIP4 results dashboard](https://www.mina.vote/proposal/4/results)

## Conclusion

MIP voting is a substantial addition to Mina's ever-evolving suite of
on-chain governance functionality. This is a huge milestone which advances
the community and decentralization of the protocol. Granola is honored to be
a part of the technical implementation of such a major development in the
Mina ecosystem.

## Granola Systems

[Granola Systems](https://granola.team/) is a software consultancy and Mina
ecosystem partner. Granola has developed a dashboard for displaying [on-chain
voting results](https://mina.vote).
