import fs from 'fs';
import path from 'path';

const mapping: Record<string, string> = {
  '#1E1440': '#4A1D34',
  '#2D2680': '#AE2070',
  '#9E96E8': '#E8A1CB',
  '#EEEDFE': '#F9ECF3',
  '#1A1240': '#3F1F35',
  '#534AB7': '#AE2070',
  '#3C3489': '#6B2E58',
  '#7F77DD': '#D1458E',
  '#0A0A16': '#1E0A12',
  '#0D0D1A': '#2B1623',
  '#12112A': '#391B2F',
  '#10102A': '#341528',
  '#221660': '#8A1957',
  '#161232': '#421C35',
  '#C8C4F0': '#F0C4D9',
  '#AFA9EC': '#ECA9CB'
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;
  
  for (const [key, value] of Object.entries(mapping)) {
    const regex = new RegExp(escapeRegExp(key), 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, value);
      replaced = true;
    }
  }
  
  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
}
