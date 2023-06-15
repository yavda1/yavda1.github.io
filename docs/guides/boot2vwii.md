# Boot2vWii

Boot2vWii allows you to create forwarders to the Wii menu that act as Wii apps. You can make it go to any Wii channel you like, making it a very powerful tool.

## What do I need?

- [DevkitPPC](https://devkitpro.org/wiki/devkitPro_pacman)
- [wut](https://github.com/devkitPro/wut)
- [wut-tools](https://github.com/devkitPro/wut-tools)
- [git](https://git-scm.com/)

## Getting started

First, you have to locally clone the Github repo to get access to the makefile

1. Open the Terminal or CMD prompt
2. Type `git clone https://github.com/WiiDatabase/Boot2vWii` 
    - This locally clones the repo to your machine, giving you access to all the tools required
3. Type `cd boot2vwii`
    - This brings you into the directory with all of Boot2vWii's files

## Usage

1. Use `make` to create a forwarder. After typing `make` you have to specify some things. All the parameters are listed below.
 - `TID`: The title ID for whatever app you're trying to make the forwarder go to
 - `DISPLAY`: Can either be DRC, BOTH or TV. If it is set to DRC the forwarder will go the Gamepad, if it is TV it will go on the screen and if it is BOTH it will display on both
 - `ICON`: What the icon for the title will be in the Wii U menu
 - `APP_NAME`: Name of the title
 - `APP_AUTHOR`: Creator of the title you are booting into
 - `TV_SPLASH`: The splash screen that will be displayed on the TV when booting into the app
 - `DRC_SPLASH`: The splash screen that will be displayed on the Gameoad when booting into the app

## Examples

`make TID=0x00010001-RMCX APP_NAME="CTGP Revolution" APP_AUTHOR="Chadsoft" ICON="ctgpicon.png"`

`make TID=0x00010001-OHBC APP_NAME="Homebrew Channel" APP_AUTHOR="Team Twiisers" ICON="hbchannel.png"`
