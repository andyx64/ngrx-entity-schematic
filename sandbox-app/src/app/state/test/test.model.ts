export interface Test {
  id: string;
  name: string;
  description: string;
}

// for testing
/*
export const generateTest = (idOverride?: number): Test => ({
  id: idOverride || (Math.floor(Math.random() * 100) + 1),
  name: 'Test name',
  description: 'Test description'
});

export const generateTestArray = (count = 10): Test[] =>
  // Overwrite random id generation to prevent duplicate IDs:
  Array.apply(null, Array(count)).map((value, index) => generateTest(index + 1));

export const generateTestMap = (
  testArray: Array<Test> = generateTestArray()
): { ids: Array<number>, entities: any } => ({
  entities: testArray.reduce(
    (testMap, test) => ({ ...testMap, [test.id]: test }),
    {}
  ),
  ids: testArray.map(test => test.id)
});

/*
