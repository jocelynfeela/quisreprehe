results[i] = applyOperation(
  document,                    // Argument 1: 'document'
  patch[i],                    // Argument 2: 'patch[i]'
  validateOperation,           // Argument 3: 'validateOperation'
  true,                        // Argument 4: 'true'
  banPrototypeModifications,   // Argument 5: 'banPrototypeModifications'
  i                            // Argument 6: 'i'
);
