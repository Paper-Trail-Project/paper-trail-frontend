import React, { useState, useEffect } from "react";
import "../Styles/Encyclopedia.css";
import ChapterModal from "./ChapterModal";

export default function Encyclopedia() {

  const [modalState, setModalState] = useState(false);
  const [clickedChapter, setClickedChapter] = useState({})

  
  // useEffect(() => {setClickedChapter(false)}, [])

  const handleClick = (chapter) => {
    showModal()
    setClickedChapter(chapter)
    console.log(clickedChapter)
  }

  const showModal = () => {
    setModalState(!modalState);
  };

  const hideModal = () => {
    setModalState(!modalState);
  };

  let chapters = [
    {
      title: "Budgeting",
      summary: "Learn how to create, maintain and update a budget!",
      sections: [
        {
          title: "What is a budget?",
          content:
            "A budget is an estimation of revenue and expenses over a specified future period of time and is usually compiled and re-evaluated on a periodic basis. Budgets can be made for a person, a group of people, a business, a government, or just about anything else that makes and spends money.",
        },
        {
          title: "Static Vs. Flexible Budgets",
          content:
            "There are two major types of budgets: static budgets and flexible budgets. A static budget remains unchanged over the life of the budget. Regardless of changes that occur during the budgeting period, all accounts and figures originally calculated remain the same. A flexible budget has a relational value to certain variables. The dollar amounts listed on a flexible budget change based on sales levels, production levels or other external economic factors. Both types of budgets are useful for management. A static budget evaluates the effectiveness of the original budgeting process, while a flexible budget provides deeper insight into business operations.",
        },
        {
          title: "Building a Budget",
          content:
            "In general, traditional budgeting starts with tracking expenses, eliminating debt and, once the budget is balanced, building an emergency fund. But to speed up the process, you could start by building a partial emergency fund. This emergency fund acts as a buffer as the rest of the budget is put in place, and should replace the use of credit cards for emergency situations. The key is to build the fund at regular intervals, consistently devoting a certain percentage of each paycheck toward it and, if possible, putting in whatever you can spare on top. This will get you to think about your spending, too.",
        },
        {
          title: "What's an Emergency?",
          content:
            "You should only use the emergency money for true emergencies: like when you drive to work but your muffler stays at home, or your water heater starts to die. You would save money if you used your emergency fund to eliminate credit card debt, but the purpose of the fund is to prevent you from having to use your credit card for paying for unexpected expenses. With a proper emergency fund, you will not need your credit card to keep you afloat when something goes wrong.",
        },
        {
          title: "Downsize and Substitute",
          content:
            "Now that you have a buffer between you and high-interest debt, it is time to start the process of downsizing. The more space you can create between your expenses and your income, the more income you will have to pay down debt and invest. This can be a process of substitution as much as elimination. For example, if you have a monthly gym membership, cancel it. Use half of the money you save to invest or pay off outstanding debts, and save the other half to begin building a home gym in your basement. Instead of buying coffee from a fancy coffee shop every day, invest in a coffee maker with a grinder and make your own, saving more money over the long term. Although eliminating expenses entirely is the fastest way to a solid budget, substitution tends to have more lasting effects. People often cut too deep and end up making a budget that they can't keep because it feels like they are giving up everything. Substitution, in contrast, keeps the basics while cutting down the costs.title",
        }

      ],
      quiz_questions: [
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option2",
        },
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option4",
        },
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option3",
        },
      ],
      completed: false,
    },
    {
      chapter: 2,
      title: "Saving and Growing your Money",
      summary: "Save money daily, monthly and for the long term",
      sections: [
        {
          title: "Intro",
          content:
            "Saving money can seem like more trouble than it's worth, given the relatively small sums yielded by trimming expenses by a few dollars a week here and there. But take those savings and invest them, even conservatively, and that belt-tightening promises to deliver thousands of dollars over the long-term. The potential payoffs increase more dramatically still if you also shrink some ongoing expenses that are often mistakenly treated as if they were fixed; electricity and insurance bills, for example, or your mortgage payment.",
        },
        {
          title: "Key Takeaways",
          content:
            'Going DIY for your lunches and coffees can alone save you thousands in the long run. Check regularly for less expensive options for such monthly expenses as cable, wireless, and electrical bills. Dickering can be effective in lowering costs.Profit from cashlessness by charging expenses to a credit card with generous cashback benefits.Despite being highly competitive, rates to insure your car and home range widely. Shop around at least once a year"',
        },
        {
          title: "Daily Savings",
          content: "Daily Savings content blah blah blah",
        },
      ],
      quiz_questions: [
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option2",
        },
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option4",
        },
        {
          question: "string",
          answer_options: ["option1", "option2", "option3", "option4"],
          answer: "option3",
        },
      ],
      completed: false,
    },
    {
      chapter: 3,
      title: "Banking",
      summary:
        "Learn what the difference between Checking and Savingd accounts and which one works for you!",
        sections: [
          {
            title: "Banking Basics",
            content: "Bolodfkhj",
          },
        ],
    },
  ];

  // console.log(chapters[0].sections[0].title)


  return (
    <div className="container">
      <ul id="chapter-ul">
        {chapters.map((chapter) => (
          <>
          {/* <p>{chapter.sections[0]}</p> */}
          <li className="list" key={chapter.title} onClick={() => handleClick(chapter)}>
            CHAPTER {chapters.indexOf(chapter) + 1}: {chapter.title}
            <ChapterModal show={modalState} handleClose={hideModal} sections={clickedChapter.sections}>
              </ChapterModal>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
}
