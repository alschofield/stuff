# objective
- basically a cooler desalination plant that puts good water back in the ocean
- Create a Filtration device that, given sea/ocean water (very simplistic):
  - desalinates sea water
  - seperates out elements/minerals
  - re salinates water based on desired combination/ph of rn 8.2

# what is in sea water
- see (link to shared/element_info.md)

- would like to figure out what the desired composition looks like, then we have a base to be able to level the water to, just pulling bicarbonates out when actually there is an increased amount of chloride causeing the inceased acidity could lead to pulling too many bicarbonates out of the environment while still leaving the water too acidic, this way we could level all extra salts and minerals in the ocean to provide for a more stable environment, may also even get an idea of wtf is in Other (care to explain NASA?)

- oh dittmar give me a kiss
  - https://escholarship.org/uc/item/38p2q583 once i decide to read this and pull out how much of each mineral he found in his samples of at least only about 100?ish years after the start of industrialization, should have a decentish enough base to start from, then maybe we can try to see if there is any way to derive what seawater looked like pre industrialization

- maybe we try to grab as many dated seawater compositions as possible, and then try to figure if there is any sort of correllation that could be found to help figure out what levels were before industrialization started, or maybe someone already has that somewhere, the central idea is carbon levels are traditionally thought to have been on a normal trend before industrialization, so theoretically around and before then would give us a "normal" seawater composition

# how do we remove bicarbonates and other elements/minerals out of water
- currently have 3 solutions i believe
  1. just remove it all, deal with sorting the elements later, and recombine water before dispersion 4Head (desalination)
  2. break down and build up? (would allow for control of more substances than just carbon, this instead of removing co2 would remove and add bicarbonates)
    - seperate h2o, and all other minerals
    - recombine all materials based on the desired percentages
    - if excess of any mineral, move to storage
  3. reverse reactions? (specifically to control co2 levels in the ocean and curb carbonic acidification)
    - carbonate ion + hydrogen ion => bicarbonate ion + hydrogen ion => carbonic acid + more carbonic acid (equillibrium reaction, le chatelier principle) => co2 and h2o
      - CO3 2- + H+ => HCO3- (turn all carbonates to bicarbonates)
      - HCO3- + H+ => H2CO3 (turn all carbonates to carbonic acid)
      - H2CO3 => H2O + CO2 (turn all carbonic acid to co2 and h2o)
    - once i have h2o and co2, then need to determine how much co2 needs to be removed to reach the desired ratio of bicarbonates to h2o
    - or (since there really shouldnt be much carbonic acid in the actual water, fast reaction) we disregard turning bicarbonates into carbonic acid and just remove the desired amount of bicarbonates

- both might be useful, maybe the carbonic acid reaction is used to remove excess bicarbonate and carbonate ions, and then afterwards we break down and build back up the components of the water, we solve the carbon problem at hand while allowing more research to be done on water make up and things of the sort, maybe this reaction is whats used to remove excess bicarbonates/carbonates

## solution 1
- basic idea
  - break down sea water and seperate all basic parts
    - H2O, chloride, sodium, sulfate, magnesium, calcium, potassium, bicarbonate, other
    - desalinate water
    - after desalinating, transport all but the water to local storage or back to main storage if full
      - need a way to organize and potentially break down any of the elements/chemicals
  - recombine to desired state
    - need to figure out desired state
      - need to look at water make up throughout time as far back as we can find
      - thinking ph is a great indicator but we can also try for chemical make up
    - place chemicals back into water using local storage
  - output water back into the ocean

# device specs (basic specs for now until i figure out more of these specifics)
- if underwater, encased in concrete, then majority steel probably, would like the inside to be completely encased and unable to be touched by any water that is not intended to be there
- component to intake seawater
  - see './Intake/README.md'
- desalination component
  - see './Desalinator/README.md'
- scanner component
  - see './Scanner/README.md'
- local storage component
  - see './Local Storage/README.md'
- component to output water
  - see './Outake/README.md'

# what materials can be used to reduce pollution
- possibilities
  - concrete
  - steel
  - or acrylic?
- i think concrete for the basic structure
- steel for the moveable parts (doors that input and output water)
- not sure if acrylic is needed, well acrylic glass could be cool if humans would ever be down inside the filtration system
- ideally inside is fully encased so that not waterproof materials can be used inside but maybe its better for all of it to be waterproof

- also, the actual filter could be above sea level technically and could pull water up to it through piping
- but depending on where these need to go (at water current hotspots? close to land?) will probably determine what needs to be done, if its near the shore, the filtration systems could be on land as well with the control center, if it needs to be far from land, then should entertain underwater and floating filters, floating has to deal with more weather conditions than underwater

# can anyone make this or help us make this (specifically the filtration system)?
- doubt it, maybe people could make specific parts right now, would probably need to spec out each part and find manufacturers who could make them

# checklist
x = done, / = decent enough progress has been made
- [x] how to (from a high level) take carbon out of water
- [/] what is in sea/ocean water
- [/] how to (specifically) remove excess minerals/elements/chemicals from water
- [ ] software
- [ ] how to build filters
  - [ ] entry/exit doors
  - [ ] encasing
  - [ ] desalinator
  - [ ] local storage
  - [ ] scanner
  - [ ] support

# links
- https://salinity.oceansciences.org/learn-more.htm

- https://escholarship.org/uc/item/38p2q583

- https://www.st.nmfs.noaa.gov/Assets/Nemo/documents/lessons/Lesson_3/Lesson_3-Teacher's_Guide.pdf unironically

- https://www.youtube.com/watch?v=kuGvfwEL5v4
