const data = [
  {
    _id: "100",
    title: "Gilead",
    desc: "A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an asto...",
    thumbnail:
      "http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "2",
    title: "Spider's Web",
    desc: "A new 'Christie for Christmas' -- a full-length novel adapted from her acclaimed play by Charles Osb...",
    thumbnail:
      "http://books.google.com/books/content?id=gA5GPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "3",
    title: "The One Tree",
    desc: "Volume Two of Stephen Donaldson's acclaimed second trilogy featuing the compelling anti-hero Thomas ...",
    thumbnail:
      "http://books.google.com/books/content?id=OmQawwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "4",
    title: "Rage of angels",
    desc: "A memorable, mesmerizing heroine Jennifer -- brilliant, beautiful, an attorney on the way up until t...",
    thumbnail:
      "http://books.google.com/books/content?id=FKo2TgANz74C&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "5",
    title: "The Four Loves",
    desc: "Lewis' work on the nature of love divides love into four categories; Affection, Friendship, Eros and...",
    thumbnail:
      "http://books.google.com/books/content?id=XhQ5XsFcpGIC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "6",
    title: "Soul of the Sword",
    desc: "A sweeping illustrated history of war and the implements used to perpetrate it takes readers on a fa...",
    thumbnail:
      "http://books.google.com/books/content?id=eoEagVTujdcC&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "technology",
  },
  {
    _id: "7",
    title: "A Spark of Genius",
    desc: "Recounts the life and accomplishments of the Croatian-born engineer who developed alternating-curren...",
    thumbnail:
      "http://books.google.com/books/content?id=kFFWipanqsoC&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "technology",
  },

  {
    _id: "9",
    title: "The Problem of Pain",
    desc: "In The Problem of Pain, C.S. Lewis, one of the most renowned Christian authors and thinkers, examin...",
    thumbnail:
      "http://books.google.com/books/content?id=Kk-uVe5QK-gC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "psychology",
  },
  {
    _id: "10",
    title: "Illustrated Guide to the National Electrical Code",
    desc: "This updated edition utilizes visualization to present a complete, concise, and easy-to-understand e...",
    thumbnail:
      "http://books.google.com/books/content?id=hoKRpBF-5TEC&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "technology",
  },
  {
    _id: "11",
    title: "Feel the Fear-- and Do it Anyway",
    desc: "A psychotherapist shows how to identify the fears that are inhibiting one's life, ranging from publi...",
    thumbnail:
      "http://books.google.com/books/content?id=o2WbcxBt8IEC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "political",
  },
  {
    _id: "12",
    title: "How to Stop Worrying and Start Living",
    desc: "The first trade paperback edition of the classic guide to conquering the fears and worries that prev...",
    thumbnail:
      "http://books.google.com/books/content?id=zHBEKfn52l4C&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "political",
  },
  {
    _id: "13",
    title: "Difficult Conversations",
    desc: "What is a difficult conversation? Asking for a pay rise, saying 'no' to your boss or spouse, confron...",
    thumbnail:
      "http://books.google.com/books/content?id=5nHFQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "political",
  },
  {
    _id: "14",
    title: "An Odyssey in Learning and Perception",
    desc: "An Odyssey in Learning and Perception documents a fifty-year intellectual expedition in the areas of...",
    thumbnail:
      "http://books.google.com/books/content?id=oG2GmyFXJC0C&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "breaking-news",
  },
  {
    _id: "15",
    title: "Authentic Happiness",
    desc: "Argues that happiness can be a learned and cultivated behavior, explaining how every person possesse...",
    thumbnail:
      "http://books.google.com/books/content?id=CM9tBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&sou...",
    category: "political",
  },
  {
    _id: "16",
    title: "The Autumn of the Patriarch",
    desc: "One of Gabriel García Márquez's most intricate and ambitious works, The Autumn of the Patriarch is a...",
    thumbnail:
      "http://books.google.com/books/content?id=OMqGpe7qqFoC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "17",
    title: "Continental Drift",
    desc: "A powerful literary classic from one of contemporary fiction's most acclaimed and important writers,...",
    thumbnail:
      "http://books.google.com/books/content?id=VDRLPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "18",
    title: "The Burglar Who Thought He Was Bogart",
    desc: "Desc is the short form of description and this format is the actual same as our real database.",
    thumbnail:
      "http://books.google.com/books/content?id=TaXSmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "19",
    title: "The Alchemist - Gift Edition",
    desc: "Desc is the short form of description and this format is the actual same as our real database.",
    thumbnail:
      "http://books.google.com/books/content?id=h6QuJZffgHYC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "breaking-news",
  },
  {
    _id: "20",
    title: "The Zero",
    desc: "Five days after a terrorist attack decimates his home city, Brian Remy struggles with gaps in his me...",
    thumbnail:
      "http://books.google.com/books/content?id=x5JrBQ4bfLsC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "fiction",
  },
  {
    _id: "21",
    title: "The Outsiders",
    desc: "The Socs's idea of having a good time is beating up Greasers like Ponyboy, the rough, tough, long-ha...",
    thumbnail:
      "http://books.google.com/books/content?id=LOnpPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "psychology",
  },
  {
    _id: "22",
    title: "Cut",
    desc: "Fifteen-year old Callie is so withdrawn that she's not speaking to anyone - including her therapist ...",
    thumbnail:
      "http://books.google.com/books/content?id=Q140Mlie138C&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "psychology",
  },
  {
    _id: "23",
    title: "Naked Lunch",
    desc: "The anarchic, phenomenally strong-selling classic from the godfather of the Beats: revitalised with ...",
    thumbnail:
      "http://books.google.com/books/content?id=1B36S7t4k5AC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "psychology",
  },
  {
    _id: "24",
    title: "Mars and Venus Book of Days",
    desc: "Provides daily reminders of the differences in behavior and communication styles of men and women",
    thumbnail:
      "http://books.google.com/books/content?id=kd6YGT74stsC&printsec=frontcover&img=1&zoom=1&source=gbs_ap...",
    category: "psychology",
  },
];
export default data;
