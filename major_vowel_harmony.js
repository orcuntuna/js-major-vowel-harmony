const isHasMajorVowelHarmony = word => {
  const incompatible_pattern = /^((.*?)[eiöü](.*?)[aıou](.*?)|(.*?)[aıou](.*?)[eiöü](.*?))$/g;
  return incompatible_pattern.test(word) ? false : true
};

const isHasMajorVowelHarmonyAlternative = word => {
  const backvowels = ["a", "ı", "o", "u"];
  const frontvowels = ["e", "i", "ö", "ü"];
  let has_backvowel, has_frontvowel = false;
  for(let i=0; i<word.length; i++){
    if (backvowels.includes(word[i])) {
      has_backvowel = true;
    } else if (frontvowels.includes(word[i])) {
      has_frontvowel = true;
    }
  }
  return has_backvowel && has_frontvowel ? false : true
};

export default isHasMajorVowelHarmony;
