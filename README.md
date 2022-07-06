# AutoCharger

> An utility tool used to toggle a smart plug through IFTTT, in order to automatically charge your laptop.

## Install

```bash
yarn install
```

## Configure

1. Create an account on [IFTTT](https://ifttt.com/)
2. [Create](https://ifttt.com/create) two Webhook Applets for toggling on/off the smart plug

```bash
Example:

IF (Webhook -> "Receive a web request" -> Event name: "plug_on")
Then That (Connect your smart plug account -> "Turn on plug" -> Select device)

IF (Webhook -> "Receive a web request" -> Event name: "plug_off")
Then That (Connect your smart plug account -> "Turn off plug" -> Select device)
```

4. Fill in the `config.json` file. You can find your IFTTT key by going to [Webhooks integrations](https://ifttt.com/maker_webhooks) and clicking on "Documentation".

```bash
Example:

{
  "key": "XXXXXX",          // Your IFTTT key (42 characters long)
  "events": {
    "on": {
      "name": "plug_on",    // IFTTT webhook event name
      "percent": 20         // Battery % when to turn the plug on
    },
    "off": {
      "name": "plug_off",   // IFTTT webhook event name
      "percent": 80         // Battery % when to turn the plug off
    }
  }
}
```

## Use

```bash
yarn start
```
