//--------------------------------------------------------------------------------------------------------------------
// pml for NotePlan
// Ian Lawrence
// v0.2.2, 15.06.2021
//--------------------------------------------------------------------------------------------------------------------

const pmlwrapChoice = [
  "{SELECTION}",
  "(SELECTION)",
  "QuoteThis{SELECTION}",
  "### ThinkHeader{SELECTION}",
  "## StepHeader{SELECTION}",
];

const pmlWordsChoice = [
  "# WebTitle{ThePhrase}",
  "## StepHeader{ThePhrase}",
  "### ThinkHeader{ThePhrase}",
  "QuotationThis{ThePhrase}",
  "QuoteThis{ThePhrase}",
  "EmphasiseThis{ThePhrase}{ThePhrase}",
  "BoldThis{ThePhrase}",
  "AttributeThis{ThePhrase}",
  "SafetyTested{ThePhrase}",
];

const pmlSpeechChoice = [
  "WrongTrack{ThePhrase}",
  "RightLines{ThePhrase}",
  "TeacherTip{ThePhrase}",
  "TeacherSpeak{ThePhrase}",
  "JustSpeak{ThePhrase}",
  "PupilSpeak{TheName}{ThePhrase}",
  "SafetyTip{ThePhrase}",
  "TeacherOne{ThePhrase}",
  "TeacherTwo{ThePhrase}",
  "TeacherThree{ThePhrase}",
];
const pmlGraphicLinkChoice = [
  "InsertLink{LinkText}{locallink}",
  "### InsertGraphic{locallinkPID}{width}{height}",
  "InsertGraphic{locallink}",
];

const pmlSpacingChoice = [
  "SpacingLinebreak ",
  "SpacingParabreak ",
  "SpacingThinspace ",
  "SpacingNonbreakspace",
];

const pmlSymbolsChoice = [
  " SymbolArrowright ",
  " SymbolEqual ",
  " SymbolApproxequal ",
  " SymbolPi ",
  " SymbolDelta ",
  " SymbolDifferential ",
  " SymbolProportion ",
  " SymbolEquivalent ",
  " SymbolPlusorminus ",
  " SymbolPositive ",
  " SymbolNegative ",
  " SymbolMultipliedby ",
  " SymbolMinus ",
  " SymbolPlus ",
  " SymbolPercent ",
  " SymbolCopyright ",
  " SymbolEndash ",
  " SymbolEmdash ",
  " SymbolHalf ",
  " SymbolThird ",
  " SymbolQuarter ",
  " SymbolWavelength ",
  " SymbolAngulara ",
  " SymbolAngularv ",
  " SymbolFlux ",
  " SymbolEpsilon ",
  " SymbolMu ",
  " SymbolSigma ",
  " SymbolStress ",
  " SymbolStrain ",
  " SymbolDensity ",
  " SymbolAngle ",
  " SymbolDegree ",
  " SymbolTemperaturecentigrade ",
  " SymbolOhm ",
  " SymbolEMF ",
  " SymbolGamma ",
  " SymbolBeta ",
  " SymbolAlpha ",
];

const pmlTechnicalChoice = [
  "FractionBlock{theWord}{theWord}",
  "FractionRoot{TheSymbol}{TheSymbol}",
  "GroupBlock{ThePhrase}",
  "JustUnit{Units}",
  "NumberRoot{TheDigit}",
  "NumberSuper{TheNumber}{TheExponent}",
  "NumberUnit{TheNumber}{TheUnit}",
  "QuantityExponent{TheSymbol}{TheNumber}{TheExponent}{Units}",
  "QuantityOrder{TheSymbol}{TheExponent}{Units}",
  "QuantityRange{TheSymbol}{StartNumber}{EndNumber}{Units}",
  "QuantityRoot{TheSymbol}",
  "QuantitySub{TheSymbol}{TheSubscript}",
  "QuantitySuper{TheSymbol}{TheSuperscript}",
  "QuantitySymbol{TheSymbol}",
  "QuantityValue{TheSymbol}{TheNumber}{TheUnit}",
  "QuantityVector{TheSymbol}",
  "ValueExponent{TheNumber}{TheExponent}{Units}",
  "ValueOrder{TheSymbol}{TheExponent}{Units}",
  "ValueRange{TheSymbol}{StartNumber}{EndNumber}{Units}",
  "ValueUnit{TheNumber}{TheUnit}",
  "VectorMagnitude{TheSymbol}",
  "VectorMatrix{TheSymbol}{AComponent}{AComponent}{AComponent}",
  "VectorOver{TheSymbol}",
  "VectorSub{TheSymbol}{TheSubscript}",
  "WordSub{TheWord}{TheSubscript}",
  "WordSuper{TheWord}{TheSuperscript}",
];

const pmlRelationshipChoice = [
  "AccumulateRelationship{TheFluent}{TheFluxion}{TheTime}",
  "ApproxeqAssertion{A}{B}",
  "DifferenceABC{A}{B}{C}",
  "EfficiencyCalc{A}{B}",
  "EqualityAssertion{A}{B}",
  "FractionABC{A}{B}{C}",
  "FractionAdBeqCdD{A}{B}{C}{D}",
  "FractionAdBeqCDdEF{A}{B}{C}{D}{E}{F}",
  "FractionAnBC{A}{B}{C}",
  "FractionBdCeqA{A}{B}{C}",
  "FractionQuantityABC{A}{B}{C}",
  "FractionQuantityAnBC{A}{B}{C}",
  "FractionQuantityBdCeqA{A}{B}{C}",
  "FractionVectorABC{A}{B}{C}",
  "ProductABC{A}{B}{C}",
  "ProductABeqCD{A}{B}{C}{D}",
  "ProductAnBC{A}{B}{C}",
  "ProductQuantityABC{A}{B}{C}",
  "ProductQuantityAnBC{A}{B}{C}",
  "ProductVectorCrossABC{A}{B}{C}",
  "ProductVectorDotABC{A}{B}{C}",
  "ProportionAssertion{A}{B}",
  "SumABC{A}{B}{C}",
];

async function pmlWords() {
  let theChoice = await CommandBar.showOptions(
    pmlWordsChoice,
    "Choose the what you'd like to insert"
  );
  let pmlInsert = pmlWordsChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
    Clipboard.string = " " + pmlInsert + " ";
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlSpeech() {
  let theChoice = await CommandBar.showOptions(
    pmlSpeechChoice,
    "Choose a speech bubble you'd like to insert"
  );
  let pmlInsert = pmlSpeechChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlSpacing() {
  let theChoice = await CommandBar.showOptions(
    pmlSpacingChoice,
    "Choose the spacing you'd like to insert"
  );
  let pmlInsert = pmlSpacingChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlTechnical() {
  let theChoice = await CommandBar.showOptions(
    pmlTechnicalChoice,
    "Choose the technical text you'd like to insert"
  );
  let pmlInsert = pmlTechnicalChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlRelationship() {
  let theChoice = await CommandBar.showOptions(
    pmlRelationshipChoice,
    "Choose the relationship you'd like to insert"
  );
  let pmlInsert = pmlRelationshipChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlGraphicLink() {
  let theChoice = await CommandBar.showOptions(
    pmlGraphicLinkChoice,
    "Choose the graphic or link primitive you'd like to insert"
  );
  let pmlInsert = pmlGraphicLinkChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlSymbols() {
  let theChoice = await CommandBar.showOptions(
    pmlSymbolsChoice,
    "Choose the symbol you'd like to insert"
  );
  let pmlInsert = pmlSymbolsChoice[theChoice.index];
  if (pmlInsert != undefined && pmlInsert != "") {
    Editor.insertTextAtCursor(pmlInsert);
  } else {
    CommandBar.showOptions([""], "Can't get pml to insert");
  }
}

async function pmlWrapper() {
  let grabThis = Editor.selectedText;
  let theChoice = await CommandBar.showOptions(
    pmlwrapChoice,
    "Choose the wrapper"
  );
  let theWrap = pmlwrapChoice[theChoice.index];
  let splitter = theWrap.length - 1;
  let wellWrapped =
    theWrap.substring(0, splitter - 9) + grabThis + theWrap.substring(splitter);
  if (grabThis != undefined && grabThis != "") {
    Editor.replaceSelectionWithText(wellWrapped);
  } else {
    CommandBar.showOptions([""], "Can't get selection");
  }
}

async function pmlJumpStepHeader() {
  const paras = Editor?.paragraphs;
  if (paras == null) {
    // No note open
    return;
  }
  var headersIndex = []; // array to be lookup for which para to highlight
  const headingParas = paras.filter((p) => p.type === "title");
  const headingValues = headingParas.map((p) => p.content);
  // If the content of the paragraph contains the target string, then append the index to an array. This array will be a lookup to map the selection from the command bar onto the notes paragraph structure
  for (i = 0; i < headingValues.length; i++) {
    if (headingValues[i].includes("StepHeader")) {
      headersIndex.push(i);
    }
  }
  // now just the stepHeaders
  const stepHeaders = headingValues.filter((p) => p.includes("StepHeader"));
  // Show list of stepHeaders to choose from
  if (stepHeaders.length > 0) {
    const thechoice = await CommandBar.showOptions(
      stepHeaders,
      "Select StepHeader to jump to:"
    );
    Editor.highlight(headingParas[headersIndex[thechoice.index]]);
    // the headersIndex provides a lookup to select which of the  headingParas to highlight
  } else {
    CommandBar.showOptions([""], "Warning: No stepHeaders found");
  }
  globalThis.jumpToHeading = jumpToHeading;
}

async function pmlJumpThinkHeader() {
  const paras = Editor?.paragraphs;
  if (paras == null) {
    // No note open
    return;
  }
  var headersIndex = []; // array to be lookup for which para to highlight
  const headingParas = paras.filter((p) => p.type === "title");
  const headingValues = headingParas.map((p) => p.content);
  // If the content of the paragraph contains the target string, then append the index to an array. This array will be a lookup to map the selection from the command bar onto the notes paragraph structure
  for (i = 0; i < headingValues.length; i++) {
    if (headingValues[i].includes("ThinkHeader")) {
      headersIndex.push(i);
    }
  }
  // now just the thinkHeaders
  const stepHeaders = headingValues.filter((p) => p.includes("ThinkHeader"));
  // Show list of stepHeaders to choose from
  if (stepHeaders.length > 0) {
    const thechoice = await CommandBar.showOptions(
      stepHeaders,
      "Select ThinkHeader to jump to:"
    );
    Editor.highlight(headingParas[headersIndex[thechoice.index]]);
    // the headersIndex provides a lookup to select which of the  headingParas to highlight
  } else {
    CommandBar.showOptions([""], "Warning: No ThinkHeaders found");
  }
  globalThis.jumpToHeading = jumpToHeading;
}
async function pmlJumpInsertGraphic() {
  const paras = Editor?.paragraphs;
  if (paras == null) {
    // No note open
    return;
  }
  var headersIndex = []; // array to be lookup for which para to highlight
  const headingParas = paras.filter((p) => p.type === "title");
  const headingValues = headingParas.map((p) => p.content);
  // If the content of the paragraph contains the target string, then append the index to an array. This array will be a lookup to map the selection from the command bar onto the notes paragraph structure
  for (i = 0; i < headingValues.length; i++) {
    if (headingValues[i].includes("InsertGraphic")) {
      headersIndex.push(i);
    }
  }
  // now just the thinkHeaders
  const stepHeaders = headingValues.filter((p) => p.includes("InsertGraphic"));
  // Show list of stepHeaders to choose from
  if (stepHeaders.length > 0) {
    const thechoice = await CommandBar.showOptions(
      stepHeaders,
      "Select InsertGraphic to jump to:"
    );
    Editor.highlight(headingParas[headersIndex[thechoice.index]]);
    // the headersIndex provides a lookup to select which of the  headingParas to highlight
  } else {
    CommandBar.showOptions([""], "Warning: No InsertGraphics found");
  }
  globalThis.jumpToHeading = jumpToHeading;
}

function pmlMarkForReview() {
  let thelot = Editor.content;
  const grabThis = Editor.selectedText;
  const markforalook = "<<" + grabThis + ">>";
  const toreplacestring = new RegExp(grabThis, "gi");
  thelot = thelot.replace(toreplacestring, markforalook);
  Editor.content = thelot;
}

function pmlUnMarkForReview() {
  let thelot = Editor.content;
  thelot = thelot.replace(/>>/g, "");
  thelot = thelot.replace(/<</g, "");
  Editor.content = thelot;
}
function pmlExtras() {
  Editor.insertTextAtCursor(
    "SpacedReview{{Question}{Answer}{Question}{Answer}}"
  );
}
