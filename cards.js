const cards = [
	{
		mark: 'Chevrolet',
		model: 'Spark',
		priceDollar: 1500,
		img: 'https://im.mashina.kg/tachka/images//6/c/d/6cd3e9db84035942550a3041b366c802_240x180.jpg',
		year: 2017,
		volume: 1,
		info: 'Chevrolet Spark — малолитражный автомобиль, выпускаемый General Motors с 2005 года. До 2015 года был известен на некоторых рынках, как Daewoo Matiz. А с 2015 до 2020 год за пределы Узбекистана поставлялся под маркой Ravon R2.',
	},

	{
		mark: 'Chevrolet',
		model: 'Camaro',
		priceDollar: 14500,
		img: 'https://im.mashina.kg/tachka/images//2/f/e/2fe99f3f3727e5f8879e8addd6730641_640x480.jpg',
		year: 2009,
		volume: 3.6,
		info: 'Chevrolet Camaro — американский маслкар, выпускающийся подразделением Chevrolet корпорации General Motors с 1966 года. Производство было прекращено в 2002 году и возобновлено на новой технической базе в 2009 году.В середине декабря 2023 года последний Camaro сошёл с конвейерной линии завода в Лансинге. Производство модели шестого поколения завершилось. Представители Chevrolet заявляют, что это не конец истории и со временем будет назван преемник модели[1].',
	},
	{
		mark: 'Chevrolet',
		model: 'Blazer',
		priceDollar: 32000,
		img: 'https://im.mashina.kg/tachka/images//1/4/a/14af7ce7a00e6fe56a7c075b8e11dd94_640x480.jpg',
		year: 2005,
		volume: 4.3,
		info: 'Chevrolet Blazer (он же GMC Jimmy) — среднеразмерный внедорожник, производившийся Chevrolet (подразделение корпорации GM) в период с 1983 по 2005 год. С 1992 года большой GMC Jimmy стал называться Yukon, и поэтому индекс S-15 был добавлен к названию меньшего GMC Jimmy. Начиная со второго поколения (1995 год), большой Blazer был переименован в Chevrolet Tahoe и эти внедорожники среднего размера продавались как совершенно новый Chevrolet Blazer.',
	},
	{
		mark: 'Rolls-Royce',
		model: 'Dawn ',
		priceDollar: 389500,
		img: 'https://im.mashina.kg/tachka/images//6/4/5/6457d7e569bde2a3bd2193c5f8cd6574_640x480.jpg',
		year: 2021,
		volume: 6.6,
		info: 'Rolls-Royce Dawn — кабриолет класса люкс от компании Rolls-Royce Motor Cars.Создан на базе Rolls-Royce Wraith, что заметно видно по его внешнему виду. Тем не-менее Rolls-Royce заявил что 80 % кузовных панелей являются иными в сравнении с Wraith. Также решётка радиатора имеет углубление, удлинен бампер.',
	},
	{
		mark: 'Rolls-Royce',
		model: 'Ghost',
		priceDollar: 487371,
		img: 'https://im.mashina.kg/tachka/images//4/9/d/49dd2d174f1c49ea3c227f1c110a1b22_640x480.jpg',
		year: 2023,
		volume: 6.7,
		info: 'Rolls-Royce Ghost — представительский автомобиль, разработанный компанией Rolls-Royce Motor Cars, представленный в марте 2009 года на Женевском автосалоне. На момент своего появления первое поколение модели являлось самым мощным автомобилем из всех когда-либо выпускавшихся компанией Rolls-Royce Motor Cars до появления модели Rolls-Royce Wraith в 2013 году.',
	},
	{
		mark: 'Bentley',
		model: 'Continental GT',
		priceDollar: 300000,
		img: 'https://im.mashina.kg/tachka/images//e/2/a/e2a4379d64b83079cd368e2007c036b5_640x480.jpg',
		year: 2023,
		volume: 4,
		info: 'Bentley Continental GT/GTC — купе (GT) и кабриолет (GTC) класса люкс[en], производимые британской компанией Bentley с 2003 года. Издревле в Британии среди отпрысков богатых аристократических семей существовала традиция совершать большие туры по континентальной Европе. Со временем, для этого был создан специальный класс автомобилей, Гран туризмо, сочетавших в себе динамику и комфорт, и способных без труда преодолевать на высокой скорости даже самые большие расстояния[1]. Появившийся в начале XXI века двухдверный Bentley Contitnental, обновил идею Гран туризмо, выведя её на новый, современный технический уровень.',
	},
	{
		mark: 'Bentley',
		model: 'Bentayga ',
		priceDollar: 250000,
		img: 'https://im.mashina.kg/tachka/images//d/7/d/d7d6ad7af78daf1c1c06c4bd0c78c017_640x480.jpg',
		year: 2022,
		volume: 6,
		info: 'Bentley Bentayga (рус. Бентейга[2]) — среднеразмерный кроссовер сегмента «суперлюкс», выпускающийся британской компанией Bentley Motors с 2015 года. Это первый кроссовер компании, он планировался ещё с 2012 года и представляет собой эволюцию концепт-кара EXP 9 °F. Впервые был представлен на Франкфуртском автосалоне 2015 года[3]. Построен на платформе Volkswagen MLB, которая использовалась на втором поколении Audi Q7, третьем поколении Porsche Cayenne и Volkswagen Touareg, а также Lamborghini Urus, с которым Bentayga разделила около 20 % общих запчастей. Продажи начались в ноябре 2015 года. В России продажи начались в апреле 2016 года по цене около 17 млн рублей[4] или около 209 тысяч долларов, что делает его самым дорогим серийным кроссовером в мире',
	},

	{
		mark: 'BMW',
		model: '7',
		priceDollar: 75000,
		img: 'https://im.mashina.kg/tachka/images//1/2/2/122f3d3043b8f302d25615461d0a4090_640x480.jpg',
		year: 2020,
		volume: 3,
		info: 'BMW 7, или седьмая серия BMW — автомобили серии представительского класса. Начиная с 1977 года, было выпущено семь поколений этой серии. В 2022 году компания BMW представила новую BMW 7 в кузове G70. Основными конкурентами BMW 7 являются автомобили Mercedes-Benz S-класс, Audi A8, Lexus LS и Jaguar XJ.',
	},
	{
		
		mark: 'BMW ',
		model: 'X5 M',
		priceDollar: 40500,
		img: 'https://im.mashina.kg/tachka/images//f/8/5/f85a76bd95511fc1e7975c5075b84c6d_640x480.jpg',
		year: 2015,
		volume: 4.4,
		info: 'BMW G05/G18 — четвёртое поколение знаменитого среднеразмерного кроссовера BMW X5 немецкой компании BMW[1][2][3]. Выпуск модели был начат в ноябре 2018 года в Европе[4][5][6]. Одновременно с запуском новой модели с производства была снята предыдущая — F15.',
	},
	{
		mark: 'BMW ',
		model: 'M3',
		priceDollar: 70800,
		img: 'https://im.mashina.kg/tachka/images//8/e/d/8ed37f8926870ee7150196f6409c41c9_640x480.jpg',
		year: 2022,
		volume: 3,
		info: 'BMW M3 — спортивные версии автомобилей BMW 3 серии от дочерней компании BMW M GmbH. Основными отличиями от «стандартных» автомобилей BMW 3 серии являются более мощный двигатель, улучшенная подвеска, изменённый дизайн, множественные акценты как в интерьере так и в экстерьере, указывающие на принадлежность к линейке «M»/Motorsport. Выпускаются с 1986 года.',
	},
	{
		mark: 'Mercedes-Benz ',
		model: 'S-Класс AMG',
		priceDollar: 85000,
		img: 'https://im.mashina.kg/tachka/images//f/5/a/f5a35fd201fa3a9b7f83e6bc7d2c3eb2_640x480.jpg',
		year: 2016,
		volume: 5.5,
		info: 'Mercedes-Benz S-класс (ориг. S-Klasse, от нем. Sonderklasse — «особый класс»[1][2]) — флагманская серия представительских автомобилей немецкой компании Mercedes-Benz, дочернего подразделения концерна Daimler AG. Представляет собой наиболее значимую линейку моделей в иерархии классов торговой марки. Первые представительские седаны появились ещё в начале 1950-х годов, но официально S-класс появился лишь в 1972 году',
	},
	{
		mark: 'Mercedes-Benz',
		model: 'GLE',
		priceDollar: 95000,
		img: 'https://im.mashina.kg/tachka/images//c/b/e/cbe1071934a39b92a06fde735b37b5f0_640x480.jpg',
		year: 2021,
		volume: 2.9,
		info: 'Mercedes-Benz GLE-класс (до 2015 года M-класс[2], от нем. Geländewagen Lang E-Klasse — «удлинённый внедорожник E-класса») — серия среднеразмерных кроссоверов премиум сегмента, выпускаемых с 1997 года немецким автопроизводителем Mercedes-Benz[3]. ',
	},
	{
		mark: 'Toyota',
		model: 'Supra',
		priceDollar: 32100,
		img: 'https://im.mashina.kg/tachka/images//5/1/2/512e6ae7458b70f4561a1514620cd368_640x480.jpg',
		year: 2020,
		volume: 3,
		info: 'Toyota Supra (яп. トヨタ・スープラ) — серийный спортивный автомобиль, выпускающийся компанией Toyota с 1978 года.',
	},
	{
		mark: 'Toyota',
		model: 'Camry',
		priceDollar: 16900,
		img: 'https://im.mashina.kg/tachka/images//4/4/8/448cff596d25acb534efb117d36aa5f2_640x480.jpg',
		year: 2017,
		volume: 2.5,
		info: 'Toyota Camry (яп. トヨタ・カムリ, Кáмри[1]) — автомобиль компании Toyota. Производится на заводах в Японии, США, Австралии, России и Китае, Таиланде. По состоянию на 2023 год выйдет девятое поколение автомобиля. В соответствии с классификацией легковых автомобилей по формальному признаку (габариты), принятой в ЕС, автомобиль принадлежит к сегменту E — «Executive cars», по Euro NCAP — к «Large family car» (сегмент D)[2]',
	},
	{
		mark: 'Audi',
		model: 'A4',
		priceDollar: 10800,
		img: 'https://im.mashina.kg/tachka/images//6/6/c/66c2b4ccb153e3d4092d8fce5abe6926_640x480.jpg',
		year: 2009,
		volume: 1.8,
		info: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam dolore fuga ipsa consectetur ex adipisci commodi corporis nesciunt accusantium beatae!',
	},
	{
		mark: 'Audi',
		model: 'Q6',
		priceDollar: 64000,
		img: 'https://im.mashina.kg/tachka/images//d/c/e/dce96f8a2f091d90e43ad8896141b62a_640x480.jpg',
		year: 2023,
		volume: 2,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam dolore fuga ipsa consectetur ex adipisci commodi corporis nesciunt accusantium beatae!',
	},
	{
		mark: 'Audi',
		model: 'Q6',
		priceDollar: 64000,
		img: 'https://im.mashina.kg/tachka/images//d/c/e/dce96f8a2f091d90e43ad8896141b62a_640x480.jpg',
		year: 2023,
		volume: 2,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam dolore fuga ipsa consectetur ex adipisci commodi corporis nesciunt accusantium beatae!',
	},	{
		mark: 'Honda',
		model: 'Honda',
		priceDollar: 25999,
		img: 'https://im.mashina.kg/tachka/images//4/e/3/4e32bc56a657e751465776f4ffd01d8d_640x480.jpg',
		year: 2013,
		volume: 2.4,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam dolore fuga ipsa consectetur ex adipisci commodi corpo',
	},	{
		mark: 'Honda',
		model: 'Stepwgn',
		priceDollar: 11200,
		img: 'https://im.mashina.kg/tachka/images//a/1/e/a1e37b226ebdedacf7a96d47b6f3e3be_640x480.jpg',
		year: 2012,
		volume: 2.0,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam ',
	},	{
		mark: 'Honda',
		model: 'Fit',
		priceDollar: 6900,
		img: 'https://im.mashina.kg/tachka/images//c/c/2/cc2fc1d406400a96ab6060fff6cf31ad_640x480.jpg',
		year: 2009,
		volume: 1.4,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam',
	},	{
		mark: 'Huawei',
		model: 'X5 Seres SF5',
		priceDollar: 50500,
		img: 'https://im.mashina.kg/tachka/images//f/3/6/f36745fc7bad357a220d1509b13090ca_640x480.jpg',
		year: 2023,
		volume: 5.4,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam',
	},
	{
		mark: 'Lamborghini',
		model: 'Huracán ',
		priceDollar:  282000,
		img: 'https://im.mashina.kg/tachka/images//4/6/9/46947557e83ad7839fdfac63c0c0478c_640x480.jpg',
		year: 2019,
		volume: 5.4,
		info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam mollitia voluptatibus in omnis error quod odio provident, officia totam',
	},
	{
		mark: 'BMW ',
		model: 'X5 M',
		priceDollar: 40500,
		img: '',
		year: 2015,
		volume: 4.4,
		info: '',
	},
	{
		mark: 'BMW ',
		model: 'X5 M',
		priceDollar: 40500,
		img: '',
		year: 2015,
		volume: 4.4,
		info: '',
	},
]


