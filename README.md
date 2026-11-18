# Runway Bag

Pack a trip by context and keep a separate final departure list for items still in use.

Give the things you still need in the morning their own short list. A charger can stay plugged in overnight and still appear on the departure check, alongside the regular packed count.

## Pack for the selected trip

1. Enter comma-separated items for the city and trail lists in settings. Hold **Start** to choose the trip you are packing for.
2. Turn to an item, such as **Passport**. Click when it is in the bag. The rear shows packed status and the number ready for this trip.
3. Turn to the next item. The first clip moves from the passport to the charger in the city list.

![The City / bag page stays on Passport as its indicator changes, then advances to Charger.](media/guide/pack-and-browse.gif)

## Leave a reminder at the door

1. On the charger or another item still in use, press **Start** to flag it for departure. That updates the door list and returns the selection to its first item.
2. Hold the wheel to browse just the flagged items when leaving. Click as you pack them. Press **Start** if an item no longer belongs on the door list.
3. Hold the wheel again to return to the full bag list. The clip shows the city bag view immediately after flagging the charger.

![The city list moves from Charger back to Passport as the departure flag is toggled.](media/guide/flag-charger-at-departure.gif)

## Example from the emulator

A city charger and a trail charger can carry separate packed and departure marks even if they have the same name. Changing trip selects its own list. A departure flag and a packed mark are independent, so you can check both on the rear.

## Run in the emulator

Open BUSY Bar Emulator. From this repository, run:

```sh
~/.busy-emulator/bin/busy-emulator dev --once
```

Press **Back** to exit.

The GIFs are excerpts from the emulator recording. Each front-display pixel is shown at 9× its original width and height. The end frames pause for reading.

[Full recording](media/controls.mp4) · [Rear display](screenshots/back-1.png) · [Firmware test](EMULATOR-QA.md) · [MIT license](LICENSE)
