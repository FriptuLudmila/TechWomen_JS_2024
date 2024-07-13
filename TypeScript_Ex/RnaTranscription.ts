/* Your task is determine the RNA complement of a given DNA sequence.

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U */



export function toRna(dna: string): string {
    // Create a map to hold the DNA to RNA conversions
    const dnaToRnaMap: { [key: string]: string } = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  
    // Split the DNA string into an array of characters
    // Check for invalid nucleotides and map each character to its RNA complement
    // If an invalid nucleotide is found, throw an error
    const rna = dna.split('').map(nucleotide => {
      const rnaNucleotide = dnaToRnaMap[nucleotide];
      if (!rnaNucleotide) {
        throw new Error('Invalid input DNA.');
      }
      return rnaNucleotide;
    }).join('');
  
    return rna;
  }
  
  // Examples of calling the function:
  console.log(toRna("GCTA")); // "CGAU"
  console.log(toRna("CCGTA")); // "GGCAU"
  console.log(toRna("TTAG")); // "AAUC"
  
  