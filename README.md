# MuziekApp
Eerste project van Frontend voor Designers. Maak een muzieklijst waarin je de volgorde kan veranderen.

Ik heb gekozen voor een Drap & Drop principe. Hiervan wist ik echter nog niks af en veel voorbeelden online gebruiken libraries of JQuery, echter heb ik het geprobeerd te schrijven in puur javascript.
Bij een D&D komen veel elementen kijken, dat had ik niet verwacht. Er is dragstart, dragend, droptarget en nog vele anderen. Als de drag begint (dragstart) kan je een functie uitvoeren, bijvoorbeeld dat de items er anders uitzien, of dat je een "ghost" image krijgt die je kan slepen. De default is dat je items niet kunt verplaatsen, dus dit moet je eerst uitschakelen met preventDefault.
Daarnaast is er nog drop (het echt droppen van het item), een droptarget (waar mag/kan je het item droppen), dragover (als je items over een valid target worden verplaats), dragenter (het enteren van een valid droptarget) en dragexit (het verlaten van een target).

Om iets drag-baar te maken geef je het item draggable="true" mee in HTML, daarna kan je stap voor stap alle stappen uitschrijven en de vormgeving veranderen door een class te togglen.
Ook moet het item wat je verplaats opgeslagen worden, zodat de browser het kan verplaatsen. En wat je met het item kan doen, copy, move etc.
