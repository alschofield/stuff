# objective
- Create a Filtration device that, given sea/ocean water (very simplistic):
    - check ph of liquid
    - if lower than 8.2:
        - check for excess levels of HCO3- (bicarbonate ions) which should mean the presence of excess H+ (hydrogen ions)
        - also check for any H2CO3 (carbonic acid)
        - remove all H2CO3 (carbonic acid)
        - filter out excess HCO3- and H+ until the desired ph
    - if higher than 8.2:
        - not sure
    - if 8.2:
        - do nothing
    - output liquid

# what is in sea water
- according to NASA in 2018, from 1 kg of seawater (100% = 1000g) (https://salinity.oceansciences.org/learn-more.htm) (would like a 2020 report)
    - 96.56% H2O (water)
    - 1.898% Cl - (chloride)
    - 1.0556% Na 2+ (sodium)
    - 0.2646% SO4 2- (sulfate)
    - 0.1272% Mg 2+ (magnesium)
    - 0.04% Ca 2+ (calcium)
    - 0.038% K + (potassium)
    - 0.014% HCO3 - (bicarbonate)
    - 0.0026% Other

- would like to figure out what the desired composition looks like, then we have a base to be able to level the water to, just pulling bicarbonates out when actually there is a increased amount of chloride causeing the inceased acidity could lead to pulling too many bicarbonates out of the environment while still leaving the water too acidic, this way we could level all extra salts and minerals in the ocean to provide for a more stable environment, may also even get an idea of wtf is in Other (care to explain NASA?)

- oh dittmar give me a kiss
    - https://escholarship.org/uc/item/38p2q583 once i decide to read this and pull out how much of each mineral he found in his samples of at least only about 100?ish years after the start of industrialization, should have a decentish enough base to start from, then maybe we can try to see if there is any way to derive what seawater looked like pre industrialization

- maybe we try to grab as many dated seawater compositions as possible, and then try to figure if there is any sort of correllation that could be found to help figure out what levels were before industrialization started, or maybe someone already has that somewhere, the central idea is carbon levels are traditionally thought to have been on a normal trend before industrialization, so theoretically around and before then would give us a "normal" seawater composition

# how do we remove bicarbonates and other salts/minerals out of water

# what materials can be used to reduce pollution

# device specs (basic specs for now until i figure out more of these specifics)
- component to intake seawater
    - need to intake mass amount of water
    - then maybe feed smaller amounts of water into the filtration component
        - allows easier control of the amount of water inputting into the filtration component
- component to filter water
    - needs to take ph level
    - needs to check elemental/mineral breakdown of the water
    - needs to add/remove minerals into the water based on the current levels and ph and the desired levels we have yet to define, or we just remove excess (adding requires storing additional resources, maybe have optional ability to use stored excess to add)
    - needs to output final resulting water into the output component
    - needs to output any excess carbon and minerals into the carbon/mineral outtake component
- component to outtake carbon and other minerals/salts
    - needs to output carbon/mineral input into piping to be transported to storage facilities
- component to output water
    - needs to output water input back into the the surrounding environment

# can anyone make this or help us make this?

# links
- https://salinity.oceansciences.org/learn-more.htm

- https://escholarship.org/uc/item/38p2q583

- https://www.youtube.com/watch?v=kB8d0c4DQUY