describe('OOP in prototype style', function() {
	describe('Object prototype', function() {
		it('Прототип proto', function() {
			var animal = {
				eats: true
			};
			var rabbit = {
				jumps: true
			};

			rabbit.__proto__ = animal;

			expect(rabbit.jumps).toBe(true);
			expect(rabbit.eats).toBe(true);

			var rabbit = {
				jumps: true,
				eats: false
			};
			expect(rabbit.eats).toBe(false);

		});
		it('Метод hasOwnProperty', function() {

			var animal = {
				eats: true
			};

			var rabbit = {
				jumps: true,
				__proto__: animal
			};
			expect(rabbit.hasOwnProperty('jumps')).toBe(true);
			expect(rabbit.hasOwnProperty('eats')).toBe(false);
		});
		it('Object.create(null)', function() {

			var data = Object.create(null);
			data.text = "Привет";

			expect(data.text).toBe('Привет');
			expect(data.toString).toBeUndefined;
		});

	});
	describe('Свойство F.prototype и создание объектов через new', function() {
		it('Свойство F.prototype', function() {
			var animal = {
				eats: true
			};

			function Rabbit(name) {
				this.name = name;
			}

			Rabbit.prototype = animal;

			var rabbit = new Rabbit("Кроль");

			expect(rabbit.eats).toBe(true);
		});
		it('Свойство constructor', function() {

			function Rabbit() {}

			expect(Object.getOwnPropertyNames(Rabbit.prototype)).toEqual(['constructor']);
			expect(Rabbit.prototype.constructor == Rabbit).toBe(true);
		});
	});
	describe('Свои классы на прототипах', function() {
		// Почему не сработало ?
		xit('Класс через прототип', function() {
			function Animal(name) {
				this.name = name;
				this.speed = 0;
			}
			Animal.prototype.run = function(speed) {
				this.speed += speed;
			};
			Animal.prototype.stop = function() {
				this.speed = 0;
			};
			var animal = new Animal('Зверь');

			expect(animal.speed).toBe(0);
			expect(animal.run(5)).toBe('Зверь бежит, скорость 5'); //Undefined
			expect(animal.run(5)).toBe('Зверь бежит, скорость 5'); //Undefined
			expect(animal.stop()).toBe('Зверь стоит'); //Undefined

		});
	});
	describe('Проверка класса: "instanceof"', function() {
		it('Класс через прототип', function() {
			function Rabbit() {}
			var rabbit = new Rabbit();

			expect(rabbit instanceof Rabbit).toBe(true);

			var arr = [];

			expect(arr instanceof Array).toBe(true);
			expect(arr instanceof Object).toBe(true);
		});
	})
});