function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400){
    return "This one is on me!"
  } else if (someNumber > 2000 && someNumber < 2500){
    return "I will gladly take your thirty bucks."
  } else {
    return "No can do."
  }
  }
  
function ternaryCheckCity(funCity){
  return funCity === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount){
    case 'generous':
      return 'Thank you so much.'
      case 'not as generous':
      return 'Thank you.'
      default:
        return 'Bye.'
  }
  
}