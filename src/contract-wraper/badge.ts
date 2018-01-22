import { Web3Service } from '../web3-service';
import { BigNumber } from 'bignumber.js';
import { Contract } from './contract';
import { Organization } from './organization';

export class Badge extends Contract {

	public get contractName() { return "Badge" };

	public async getAttribs() {
		try {
			var contractInstance = await this.getContractInstance();

			var result = {
				name: await contractInstance.name(),
				metaData: JSON.parse(await contractInstance.metaData()),
				next: await contractInstance.next(),
				previous: await contractInstance.previous(),
				version: await contractInstance.version()
			};

			console.log("getAttribs", result);
			return result;
		} catch (err) {
			console.warn(err.message);
			throw err;
		}
	}

}
