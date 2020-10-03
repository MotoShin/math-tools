var app = new Vue({
    el: '#find-gcd',
    data: {
        x: 'input x',
        y: 'input y',
        gcd: 'find G.C.D.!'
    },
    methods: {
        findGcg: function () {
            let r = this.x % this.y;
            let a = this.x;
            let b = this.y;
            while (a % b !== 0) {
                r = a % b;
                a = b;
                b = r;
            }
            this.gcd = b
        }
    }
})
