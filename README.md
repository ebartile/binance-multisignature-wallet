# Multi-Signature BNB Smart Chain Wallet API (BEP-20)

A secure and developer-friendly **multi-signature BNB Smart Chain wallet** system supporting:

- **BNB Smart Chain Mainnet**
- **BNB Smart Chain Testnet**

## 🔐 What is a Multi-Signature Wallet?

A **multi-signature (multi-sig)** wallet requires **multiple private keys to authorize a transaction**. Unlike traditional wallets that require only one signature (from one private key), multi-sig wallets increase security by allowing multiple parties to verify and approve transactions.

This is ideal for:
- Shared ownership accounts
- Organizational treasury management
- High-security personal funds

📖 Learn more about multi-signature wallets here: [https://academy.binance.com/en/glossary/multisignature](https://academy.binance.com/en/glossary/multisignature)

---

## 🛡️ Security & Architecture

This project is designed for server-side use by web developers managing Binance wallets. It simplifies integration while maintaining a high level of security.

**Key Storage Strategy:**
- **MongoDB**: Stores one part of the wallet key data.
- **MySQL or File System**: Stores the remaining key part.
- Keys are never fully stored in one place, ensuring distributed trust and minimizing risk in case of breach.

---

## ⚙️ Deployment Steps

1. Clone the repository.

2. Obtain etheruem network node via [Chainstack Binance Node ➝](./docs/chainstack.md) or service provider of your chosing

3. Set up your environment variables by editing the `.env` file:

    ```env
    #--------------------------------------------------------------------------
    #  Binance Config
    #  (refer to our doc)
    #--------------------------------------------------------------------------
    DB_DATABASE=binance-api
    DB_USERNAME=root
    DB_PASSWORD=password
    BINANCE_WS=wss://bsc-testnet.core.chainstack.com/c00e69dbd57bcfb1a0f56f6b29428602
    BINANCE_MONGODB_URL='mongodb://root:password@localhost:27017/'
    BINANCE_MONGODB_NAME='binance-api'
    BINANCE_STORAGE_PATH='./storage'
    BINANCE_LOGFILE='binance.log'
    BINANCE_KEYPATH=
    BINANCE_CRTPATH=
    BINANCE_ENV=test
    BINANCE_BIND=localhost
    BINANCE_PORT=7000
    ```

3. Build and run the project using Docker: (You will need to install docker if you have not done so)

    ```bash
    ./server initialize
    ./server up
    ```

    or 

    ```bash
    npm install
    npm run dev
    ```

4. The API should now be live at `http://localhost:7000`


5. ⚠️ **Important:** Using MongoDB from a Docker container is **not recommended** for production use.  
   Visit the official [MongoDB Deployment Documentation](https://www.mongodb.com/docs/manual/administration/install-community/) for secure and scalable deployment options.

## 📡 API Documentation

For details on how to interact with this wallet through the API, check out the full request guide here:  
➡️ [API Request Reference](./docs/API_REQUESTS.md)

---

---

## 🧰 Tech Stack

- **Node.js**
- **Web3.js**
- **MongoDB**
- **Docker**
- **REST API (Web API only)**

---

## 🙌 Contributions & Donations

If you'd like to support this project or contribute:

📧 Email: **ebartile@gmail.com**  
Hire Me: 🙌 

💰 Bitcoin Address (SegWit): **bc1qcdsssmn2j439cdfx428l69545av95qxwp3hgfm**

💰 Ethereum Address: **0xc62065388fa180ac44769b5252c8ee366be5569d**

💰 Binance Address (BEP-20 Network): **0xc62065388fa180ac44769b5252c8ee366be5569d**

---

