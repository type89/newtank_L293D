import slackweb
import netifaces

PiAd = netifaces.ifaddresses('wlan0')[netifaces.AF_INET][0]['addr']

IPslack=slackweb.Slack(url="https://hooks.slack.com/services/~~~Webhook~~~")

IPslack.notify(text="http://" + PiAd + ":8000", username="Newtank console")
