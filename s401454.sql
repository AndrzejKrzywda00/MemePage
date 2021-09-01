-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Czas generowania: 01 Wrz 2021, 14:31
-- Wersja serwera: 8.0.21
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `s401454`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `id` int UNSIGNED NOT NULL,
  `author_id` int UNSIGNED NOT NULL,
  `added_at` datetime NOT NULL,
  `likes` int NOT NULL,
  `content` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meme_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`id`, `author_id`, `added_at`, `likes`, `content`, `meme_id`) VALUES
(1, 2, '2021-08-27 18:15:29', 0, 'Sprawa nie jest taka oczywista, mem może również odnosić się do symulowania wspomnianego piłkarza.\nAlbo też do tego że podczas meczu z Polską nie miał łatwego życia.', 4),
(2, 14, '2021-08-25 08:38:01', 1, 'Widziałem też wersje w zupełnie innym kontekście, nie związanym z piłką nożną. Taka mina pasuje w sumie wszędzie.', 4),
(3, 13, '2021-08-25 10:39:26', 4, 'Ten wątek należałoby rozdzielić, to nawet nie jest jeden mem tylko cały cykl, który kształtował się przez lata. Do poprawy!', 2),
(4, 16, '2021-08-26 12:47:22', 0, 'Kontekst: Edyta płacze po śmierci jej menadżera, ciekawe że akurat na mediach społecznościowych...', 7),
(5, 16, '2021-08-26 12:47:52', 0, 'Udało się dodać pierwszy komentarz, uda się i drugi!', 7),
(7, 16, '2021-08-26 13:21:17', 0, 'To! Masz rację, trzeba tak zrobić, wieczorem się tym zajmę', 2),
(8, 16, '2021-08-26 13:22:01', 0, 'Nie wiem czy to jest aż takie istotnie, poza tym chyba trochę nieśmieszne. W jakim kontekście tego użyć??', 3),
(9, 16, '2021-08-26 13:27:07', 0, 'Zgadza się, ale opis o wiele za krótki, tyle jest tematów do poruszenia...', 53),
(10, 16, '2021-08-26 13:27:33', 0, 'Trzeba dodać że w polsce nie ma gdzie pracować i trzeba spierdalać na zachód.', 53),
(18, 16, '2021-08-26 15:14:28', 0, 'Dodaję komentarz z nadzieją że zadziała solidnie to co napisałem', 53),
(19, 16, '2021-08-26 15:19:13', 0, 'Polska to kraj dziwny u dziwne tu są zwyczaje 😆. Zobaczymy czy flagi działają : 🇵🇱', 53),
(20, 16, '2021-08-26 15:19:57', 0, 'Rahim czy Raheem kto to może wiedzieć, jedno jest pewne w tym sezonie City nie wygra mistrzostwa.', 53),
(21, 16, '2021-08-26 16:25:05', 0, 'TO jest mój komentarz i powinien być podświetlony na odpowiedni kolor.', 5),
(22, 16, '2021-08-26 16:25:47', 0, 'Teraz dodaję komentarz i można tu znaleźć je od aż trzech użytkowników.', 5),
(23, 16, '2021-08-26 16:26:26', 0, 'Jednak jak dodam swój komentarz to on będzie miał odpowiedni kolor.', 4),
(25, 2, '2021-08-27 12:16:44', 0, 'Teraz personalizacja odpowiedzi do komentarzy powinna śmigać!', 5),
(26, 2, '2021-08-27 12:17:20', 0, 'Ile tu komentarzy użytkownika o dziwnym nicku Zwartsdwad', 53),
(29, 2, '2021-08-27 16:57:02', 0, 'Dodaję jakiś pierwszy komentarz.', 1),
(31, 2, '2021-08-27 16:57:42', 0, 'Sam się zastanawiam ile tych komentarzy jest możliwe dodać, pewnie bardzo wiele.', 1),
(34, 2, '2021-08-30 12:45:27', 0, 'Sprawdzam jak działają komentarze na stronce w internecie.', 7),
(36, 2, '2021-08-31 11:14:39', 0, 'Oryginalna pisownia to: \"Bede grau w gre\"; \"Tomb Raider [fonetycznie]\".', 57),
(39, 2, '2021-08-31 15:10:22', 0, 'Fajnie że ktoś to wreszcie dodał.', 58),
(42, 16, '2021-09-01 15:25:53', 0, 'Natomiast sam film nakręcono w Gliwicach.', 57),
(43, 17, '2021-09-01 15:32:03', 0, '- Co wy tutaj budujecie?\n...\n...\n- Bagno', 63),
(44, 17, '2021-09-01 15:51:46', 0, 'Kawaii UwU ale piękny knur bożq', 69),
(45, 17, '2021-09-01 15:52:28', 0, 'Tylko solarisy 15 metrowe, przegubowe autobusy to przeżytek!!!!! ', 67),
(46, 17, '2021-09-01 15:52:44', 0, 'A co to za piękny kotek :3', 70),
(47, 17, '2021-09-01 15:53:45', 0, 'Nie szkaluj papieża, masz ty w ogóle człowieku rozum i godność człowieka?', 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `images`
--

CREATE TABLE `images` (
  `id` int UNSIGNED NOT NULL,
  `uri` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `meme_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `images`
--

INSERT INTO `images` (`id`, `uri`, `meme_id`) VALUES
(1, 'NFUPH4M6QRDLLKJBN7DOE4AXCM.jpg', 1),
(2, '9beadc7e-e5dc-11eb-9aba-1b7e08262541_image_hires_154400.jpg', 1),
(3, 'fetchimage.jpg', 2),
(4, 'pobrane.jpg', 2),
(5, 'Thumbnail_expert_wallet.png', 3),
(6, '1576161704_666c2.jpg', 4),
(7, 'sc.png', 5),
(8, 'edyta-gorniak-przezywa-smierc-menadzera-wiktora-kubiaka-121654-1_X.jpg', 7),
(9, 'z19315791V,Abstrachuje.jpg', 9),
(14, 'hqdefault1.jpg', 53),
(16, 'OFF-PLATFORM-Phil-Jones.jpg', 56),
(17, 'hqdefault.jpg', 57),
(18, 'eac9e5ae114dbc3bb4041322437d87af.jpg', 58),
(22, 'Comment_l8EFtcm0xwSkLxUbfHnn71dH7sstStXT.jpg', 62),
(23, 'bagno.PNG', 63),
(24, 'a small price to pay for salvation.jpg', 64),
(25, 'DAMIAN.PNG', 65),
(26, 'co by obywatel kurwa od razu.jpg', 66),
(27, 'krótki autobus.jpg', 67),
(28, 'salute ozon rosjanin.jpg', 68),
(29, 'anime konon.jpg', 69),
(30, 'bonfire lit.jpg', 70),
(31, 'chad yes.png', 71),
(32, 'które kolano.PNG', 72);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `likes`
--

CREATE TABLE `likes` (
  `id` int NOT NULL,
  `meme_id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `likes`
--

INSERT INTO `likes` (`id`, `meme_id`, `user_id`) VALUES
(17, 1, 2),
(9, 1, 16),
(4, 2, 16),
(13, 4, 2),
(5, 4, 16),
(16, 5, 2),
(8, 5, 16),
(21, 9, 2),
(12, 53, 2),
(24, 57, 2),
(26, 62, 2),
(30, 63, 17),
(28, 67, 17),
(29, 70, 17),
(27, 71, 17),
(31, 71, 18);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `memes`
--

CREATE TABLE `memes` (
  `id` int UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `year` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `added_at` datetime NOT NULL,
  `views` int NOT NULL,
  `likes` int NOT NULL,
  `added_by` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `memes`
--

INSERT INTO `memes` (`id`, `title`, `description`, `year`, `added_at`, `views`, `likes`, `added_by`) VALUES
(1, 'Donald Trump', 'Memy z prezydentem USA stały się popularne tuż przed jego prezydenturą.', '1991', '2021-08-23 00:00:00', 159, 7, 2),
(2, 'Tom i Jerry', 'Jest to niezwykle popularna i dobrze znana bajka. Kultura internetowa doskonale przyjęła ten wątek tworząc niezliczone memy, wiele opartych na absurdalnych sytuacjach w których znajdowali się bohaterowie tej bajki dla dzieci.', '2015', '2021-08-24 00:00:00', 31, 3, 1),
(3, 'SpongeBob płaci', 'Orbazek przedstawia postać z bajki SpongeBob, która ochoczo za coś próbuje zapłacić. Wykorzystywane w różnych kontekstach, najczęściej aby wyśmiewać ludzi którzy przepłacają za coś.', '2021', '2021-08-24 00:00:00', 15, 0, 2),
(4, 'Raheem Sterling face', 'Angielski piłkarz pochodzenia jamajskiego - Raheem Sterling zrobił śmieszną minę w trakcie spotkania ligowego w Premier League - lidze angielskiej. Piłkarz Manchesteru City oprócz wybitnej gry jest znany z charakterystycznego sposobu poruszania się. Obrazek był wykorzystywany w trakcie Euro 2020 aby opisać emocje w finałowym meczu.', '2019', '2021-08-24 00:00:00', 30, 2, 13),
(5, 'Papież', 'Jaki papież jest każdy widzi. Słynny mem - można otworzyć całą galerię tylko dla niego. Nie widzę jednak powodu, dla którego nie powinien się znaleźć tutaj już na początku aby otworzyć nitkę do szkalowania.', '2005', '2021-08-25 15:04:47', 31, 2, 1),
(7, 'Edyta Górniak', 'Edyta jest znana z tego że nie ogarnia rzeczywistości', '2020', '2021-08-25 18:03:46', 22, 0, 1),
(9, 'Abstrachuje', 'Abstrachuje to niezwykle znana grupa filmowo - youtubowa, która już nie robi śmiesznych filmików', '2020', '2021-08-25 18:38:48', 14, 1, 13),
(53, 'Polska', 'Jest to oczywiste, Polska to mem sam w sobie, nie wiem nawet co jest tu najśmieszniejsze. Wszystko w tym kraju jest fatalne.', '2016', '2021-08-26 13:26:31', 42, 1, 16),
(56, 'Phil Jones', 'Również znany piłkarz. Znany z groteskowych min które robił w trakcie spotkań Premier League. Wykorzystywane w zasadzie wszędzie.', '2011', '2021-08-31 09:15:25', 2, 0, 2),
(57, 'Będę grał w grę', 'Mem z klasyków polskiego internetu, czyli memów które pojawiły się w latach dwutysięcznych. Facet opowiada co będzie robił w sylwestra, myląc wymowę gry komputerowej oraz mówiąc śmiesznym akcentem. Nagranie pochodzi z Gliwic.', '2008', '2021-08-31 09:17:23', 12, 1, 2),
(58, 'Homer Simpson', 'Na obrazku główny bohater serialu \"The Simpsons\" znika w żywopłocie. Częsty wątek wykorzystywany żeby opisać czyjąś ucieczkę, wycofanie się.', '2009', '2021-08-31 09:24:17', 5, 0, 2),
(62, 'Paweł Jumper', 'Słynne nagranie. Paweł skacze ze skoczni na rowerze, przewraca się i przeklinając próbuje rozchodzić ból. Absolutny klasyk i popularny mem.', '2010', '2021-09-01 13:54:03', 4, 1, 2),
(63, 'Bagno', 'Wywiad z osobami odpowiedzialnymi za budowę - no właśnie, czego? Jak w tytule, bagna. Do teraz nie wiadomo, o co dokładnie tam chodziło, jednak pozostało to barwnym klasykiem starego polskiego internetu.', '2007', '2021-09-01 15:31:32', 3, 1, 17),
(64, 'Thanos - a small price to pay for salvation', 'Mem pochodzi z filmu Avengers: Infinity War. Przedstawiona jest na nim postać Thanosa, wypowiadającego słowa \"a small price to pay for salvation\", używany  jest często w kontekście prześmiewczym, w sytuacji gdy dana osoba przesadziła ze środkami do osiągnięcia celu, lub uczyniła to w komiczny sposób', '2018', '2021-09-01 15:34:24', 1, 0, 17),
(65, 'Triki z piłką/stary wchodzący do pokoju', 'Podczas gdy niczego nieświadomy młody jegomość wykonywał do prawilnej muzyki sztuczki z piłką nożną (całkiem imponujące), podbijając ją między innymi głową oraz przerzucając z ramienia na ramię, jego ojciec postanowił wkroczyć do jego pokoju, robiąc sobie żarty z młodego. Problem polega na tym, iż rodziciel nieubrany był w nic, poza białymi slipami.', '2004', '2021-09-01 15:36:19', 1, 0, 17),
(66, 'Co by obywatel od razu...', 'Mem pochodzi z serialu \"Kapitan Bomba\", stworzonego przez Bartosza Walaszka. Używany w sytuacjach, gdy ktoś otwarcie mówi o zamiarze łamania prawa', '2008', '2021-09-01 15:37:50', 1, 0, 17),
(67, 'Krótki autobus', 'Autobus jest krótki. Potrzeba więcej wyjaśnień?', '2018', '2021-09-01 15:38:20', 4, 1, 17),
(68, 'Salutujący ozon (rosyjski streamer salutowanie)', 'Rosyjski streamer, ozon, podczas jednego z drunk streamów zaczął oglądać teledysk piosenki opisującej konflikt rosyjsko-ukraiński. Widocznie pijany streamer zaczął salutować we łzach, co spowodowało rozrośnięcie się obrazka do reakcyjnego mema', '2017', '2021-09-01 15:40:06', 1, 0, 17),
(69, 'Kononowicz anime', 'Krzysztof Kononowicz zaczynał jako kandydat-marionetka do wyborów na prezydenta Białegostoku w latach dwutysięcznych, a przerodził się kilkanaście lat później w fenomen, przez jednych opisywany jako niezrozumiale popularny szalony mitoman, przez innych jako najdziwniejszy polski patostreamer. W tej wersji jest on niczym wyjęty z mangi.', '2016', '2021-09-01 15:41:56', 3, 0, 17),
(70, 'Bonfire lit', '\"bonfire lit\" odnosi się do komunikatu w grze Dark Souls, pojawiającego się podczas rozpalenia ogniska, które pełni funkcję checkpointa.', '2013', '2021-09-01 15:42:59', 4, 1, 17),
(71, 'Yes Chad', 'Powszechnie znany \"Chad\" widoczny na obrazku, wypowiadający \"Yes\" często używany był jako mem reakcyjny do wyśmiewania czyichś poglądów, stawiając w kontraście inne, jako lepsze', '2020', '2021-09-01 15:44:54', 5, 2, 17),
(72, 'Które kolano', 'Na filmiku wrzuconym na youtube nieznajomy jegomość grozi innemu pistoletem, prawdopodobnie zabawkowym. Pyta się go żartobliwie \"które kolano\" (będzie postrzelone), na co drugi reaguje przerażeniem.', '2016', '2021-09-01 15:46:17', 1, 0, 17);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nick` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `nick`, `password`) VALUES
(1, 'stasio.macz@onet.pl', 'Staszek', 'iofdisi3'),
(2, 'a.krzywda00@gmail.com', 'Andrzej', 'GwiezdneWojny93'),
(13, 'm.krzywda1@gmail.com', 'Myszolupa', 'prosteHaslo'),
(14, 'dwew.wewe@ter.pl', 'kwiatuszek1234', 'jakieshaslo234'),
(16, 'z@z.pl', 'Zwartsdwad', '1234567'),
(17, 'mosinski@student.agh.edu.pl', 'musli', '123456'),
(18, '123@123.pl', 'kwiatuszek', '123123'),
(19, '456@456.pl', 'myszka OR 1=1', '123123');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `meme_id` (`meme_id`);

--
-- Indeksy dla tabeli `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `meme_id` (`meme_id`);

--
-- Indeksy dla tabeli `likes`
--
ALTER TABLE `likes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`meme_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeksy dla tabeli `memes`
--
ALTER TABLE `memes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `added_by` (`added_by`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT dla tabeli `images`
--
ALTER TABLE `images`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT dla tabeli `likes`
--
ALTER TABLE `likes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT dla tabeli `memes`
--
ALTER TABLE `memes`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT dla tabeli `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`meme_id`) REFERENCES `memes` (`id`);

--
-- Ograniczenia dla tabeli `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`meme_id`) REFERENCES `memes` (`id`);

--
-- Ograniczenia dla tabeli `likes`
--
ALTER TABLE `likes`
  ADD CONSTRAINT `likes_ibfk_1` FOREIGN KEY (`meme_id`) REFERENCES `memes` (`id`),
  ADD CONSTRAINT `likes_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ograniczenia dla tabeli `memes`
--
ALTER TABLE `memes`
  ADD CONSTRAINT `memes_ibfk_1` FOREIGN KEY (`added_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
