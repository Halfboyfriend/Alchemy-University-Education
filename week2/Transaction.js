class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.input = inputUTXOs;
        this.output = outputUTXOs
        
       
    }
    execute() {
        const spent = this.input.some((e) => e.spent)
        if (spent){
            throw new Error('Cant be spent')
        }
        const inputAmount = this.input.reduce((a,t) => {
            return a + t.amount;
        }, 0)
        const outputAmount = this.output.reduce((a, t) => {
            return a + t.amount;
        }, 0)

        if (inputAmount < outputAmount) {
            throw new Error('Input cant be less than output');
        }

          this.input.forEach((utxo) => {
            utxo.spend();
        });
        this.fee = inputAmount - outputAmount;
    }
}

module.exports = Transaction;