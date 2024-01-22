import {config} from "dotenv";
export const checkEnv = (variables:string[]):void =>{
	config();
	const missing:string[] =[];
	variables.forEach(function (variable) {
    if (typeof process.env[variable] !== "string" || process.env[variable]!.length === 0) {
      missing.push(variable);
    }
  });
  if (missing.length > 0) {
		throw new Error(`Missing environment variable${missing.length>1?"s":""} ${missing.join(', ')}`);    
  }
};