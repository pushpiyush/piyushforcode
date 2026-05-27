let targetQ = 75;
const allQuestions = [];
const abcd = ['A', 'B', 'C', 'D'];
let len, subject, qType, options, solution, answer, ansText;
const links = [
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-8th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-6th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-5th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-5th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-4th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-4th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-2nd-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-2nd-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-28th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-28th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-24th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-24th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-23rd-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-23rd-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-22nd-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-22nd-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-21st-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2026-online-21st-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-8th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-7th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-7th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-4th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-4th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-3rd-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-3rd-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-2nd-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-2nd-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-29th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-29th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-28th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-28th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-24th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-24th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-23rd-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-23rd-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-22nd-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2025-online-22nd-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-9th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-8th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-8th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-6th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-6th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-5th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-5th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-4th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-4th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-1st-february-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-1st-february-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-31st-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-31st-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-30th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-30th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-29th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-29th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-27th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2024-online-27th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-15th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-13th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-13th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-12th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-11th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-11th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-10th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-10th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-8th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-8th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-6th-april-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-6th-april-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-1st-february-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-1st-february-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-31st-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-31st-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-30th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-30th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-29th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-29th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-25th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-25th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-24th-january-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2023-online-24th-january-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-29th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-29th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-28th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-28th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-27th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-27th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-26th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-26th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-25th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-25th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-30th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-29th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-29th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-28th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-28th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-27th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-27th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-26th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-26th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-25th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-25th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-24th-june-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2022-online-24th-june-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-1st-september-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-31st-august-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-31st-august-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-27th-august-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-27th-august-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-26th-august-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-26th-august-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-27th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-27th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-25th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-25th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-22th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-20th-july-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-20th-july-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-18th-march-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-18th-march-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-17th-march-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-17th-march-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-16th-march-evening-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-16th-march-morning-shift",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-26th-february-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-26th-february-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-25th-february-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-25th-february-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-24th-february-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2021-online-24th-february-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-6th-september-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-6th-september-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-5th-september-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-5th-september-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-4th-september-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-4th-september-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-3rd-september-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-3rd-september-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-2nd-september-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-2nd-september-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-9th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-9th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-8th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-8th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-7th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2020-online-7th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-12th-april-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-12th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-10th-april-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-10th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-9th-april-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-9th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-8th-april-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-8th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-12th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-12th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-11th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-11th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-10th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-10th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-9th-january-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2019-online-9th-january-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2018-online-16th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2018-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2018-online-15th-april-evening-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2018-online-15th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2017-online-9th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2017-online-8th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2017-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2016-online-10th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2016-online-9th-april-morning-slot",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2016-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2015-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2014-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/jee-main-2013-offline",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2012",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2011",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2010",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2009",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2008",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2007",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2006",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2005",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2004",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2003",
    "https://questions.examside.com/past-years/year-wise/jee/jee-main/aieee-2002"
];


async function startScraping(filename) {
	len = 0;
	subject = null;
	qType = null;
	options = null;
	ansText = null;
	answer = null;
	solution = null;

    while (allQuestions.length < targetQ) {
        console.log(`Scraping page... Current count: ${allQuestions.length}`);
        await scraper();
        
        const nextButton = [...document.querySelectorAll('a')].find(el => el.innerText.includes('NEXT'));
        if (!nextButton || allQuestions.length >= targetQ) break;
        
        nextButton.click();
        await new Promise(res => setTimeout(res, 3000)); // Wait for page load
    }
    console.log("Finished!", allQuestions);

	// Download as JSON
    const blob = new Blob([JSON.stringify(allQuestions, null, 4)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);

    console.log(`Done! ${allQuestions.length} questions downloaded.`);

}


async function scraper() {
	
	//await new Promise(res => setTimeout(res, 500));
	
    const qcNodes = document.querySelectorAll(".question-component");
    for (const node of qcNodes) {
        const question = node.querySelector('[class="question xl:text-lg px-4 py-2.5"]').innerHTML;
		const ops = node.getElementsByClassName("options");
		const ansButton = [...node.querySelectorAll('button')].find(el => el.innerText.includes('Check Answer'));
		ansButton.click();
		
        await new Promise(res => setTimeout(res, 1000));
		
		if (ops.length === 0) {
			qType = "numerical";
			options = null;
			ansText = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Answer'))?.nextElementSibling?.innerText || "N/A";
			answer = ansText.match(/[\d.]+/)?.[0] || `ansText: ${ansText} and answer: ${answer}. anserror`;
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML || "N/A";
		} else {
			const op = ops[0].querySelectorAll(".grow.question");
			qType = "mcq";
			options = [];
			op.forEach((el) => options.push(el.innerHTML));
			ansText = [...node.getElementsByClassName("options")[0].querySelectorAll("div")].find(el => el.innerText.includes('Correct Answer'))?.innerText[0];
			answer = abcd.indexOf(ansText);
			if (answer == -1) {answer = `ansText: ${ansText} and answer: ${answer}. anserror`};
			solution = [...node.querySelectorAll('h2')].find(el => el.innerText.includes('Explanation'))?.nextElementSibling?.innerHTML || "N/A";
		}

		len = allQuestions.length;
		len += 1;

		if (targetQ == 90) {
			if (len < 31) {
				subject = "chemistry";
			} else if (len > 60) {
				subject = "physics";
			} else {
				subject = "mathematics";
			}
		} else {
			if (len < 26) {
				subject = "chemistry";
			} else if (len > 50) {
				subject = "physics";
			} else {
				subject = "mathematics";
			}
		}
				
		allQuestions.push({
			"id": len + 1,
			"subject": subject,
			"type": qType,
			"question": question,
			"options": options,
			"answer": answer,
			"solution": solution
		});
		
    }
}

async function agentChor() {
	for (const l of links) {
		window.location.href = l;
		await new Promise(res => setTimeout(res, 3000));
		
		const fileName = convertJeeUrlsToFormat(l);
		targetQ = document.querySelectorAll(`div[class="bg-blue-500 text-white self-start w-[25px] h-[25px] shrink-0 flex items-center justify-center rounded-[50%] text-[80%]"]`).length;
		viewQuesButton = document.querySelector(`div a[class="px-8 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 dark:border-gray-400 text-white max-md:grow max-md:text-center drop-shadow-lg"]`);
		viewQuesButton.click();

		await new Promise(res => setTimeout(res, 3000));
		await startScraping(fileName);
	}s
}

function convertJeeUrlsToFormat(urls) {
    const monthMap = {
        'january': '01', 'february': '02', 'march': '03', 'april': '04',
        'may': '05', 'june': '06', 'july': '07', 'august': '08',
        'september': '09', 'october': '10', 'november': '11', 'december': '12'
    };

    function parseUrl(url) {
        // Extract the last segment of the URL (e.g., "jee-main-2026-online-4th-april-evening-shift")
        const slug = url.split('/').pop().toLowerCase();
        
        // Regex to capture: Year, Day (with or without st/nd/rd/th), Month, and Shift
        const regex = /jee-main-(\d{4})-online-(\d+)(?:st|nd|rd|th)?-([a-z]+)-([a-z]+)-shift/;
        const match = slug.match(regex);
        
        if (!match) {
            return `Invalid Format: ${url}`;
        }
        
        const [_, year, day, monthName, shiftName] = match;
        
        // Format Day to always be 2 digits (e.g., "4" becomes "04")
        const dayFormatted = day.padStart(2, '0');
        
        // Get the 2-digit month from our map
        const monthFormatted = monthMap[monthName];
        if (!monthFormatted) {
            return `Unknown Month in URL: ${url}`;
        }
        
        // Determine Shift format (morning = "01", evening = "02")
        let shiftFormatted = '00';
        if (shiftName === 'morning') {
            shiftFormatted = '01';
        } else if (shiftName === 'evening') {
            shiftFormatted = '02';
        }

        // Combine into the final format
        return `jm${year}${monthFormatted}${dayFormatted}${shiftFormatted}`;
    }

    if (Array.isArray(urls)) {
        return urls.map(url => parseUrl(url));
    } else {
        return parseUrl(urls);
    }
}