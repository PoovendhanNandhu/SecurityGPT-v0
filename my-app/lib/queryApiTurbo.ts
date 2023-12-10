import openai from "./chatgpt";

const queryTurbo = async (prompt: string, messages: any) => {
  if (messages) {
    const res = await openai
      .chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful Security IT support assitance. Your Task Provide daily summaries of the latest security advisories and patches relevant to our technology stack, analyze incoming security incident reports and categorize them by severity, respond to user-submitted security questions with accurate information, compile daily security news and trends briefs, review and confirm the safety of suspected phishing emails, assess system configurations or code for security vulnerabilities, regularly check our security policies against compliance standards, generate realistic cybersecurity training scenarios, evaluate new software or hardware for security risks, and analyze user access logs for unusual patterns or potential privilege escalations, offering recommendations and insights in each area." },
          ...messages,
          { role: "user", content: prompt },
        ],
        // temperature: 0.9,
        // max_tokens: 1000,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
      })
      .then((res) => res.choices[0].message?.content)
      .catch(
        (err) =>
          `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
      );
    return res;
  } else {
    const res = await openai
      .chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful Security IT support assitance. Your Task Provide daily summaries of the latest security advisories and patches relevant to our technology stack, analyze incoming security incident reports and categorize them by severity, respond to user-submitted security questions with accurate information, compile daily security news and trends briefs, review and confirm the safety of suspected phishing emails, assess system configurations or code for security vulnerabilities, regularly check our security policies against compliance standards, generate realistic cybersecurity training scenarios, evaluate new software or hardware for security risks, and analyze user access logs for unusual patterns or potential privilege escalations, offering recommendations and insights in each area." },
          { role: "user", content: prompt },
        ],
        // temperature: 0.9,
        // max_tokens: 1000,
        // top_p: 1,
        // frequency_penalty: 0,
        // presence_penalty: 0,
      })
      .then((res) => res.choices[0].message?.content)
      .catch(
        (err) =>
          `ChatGPT was unable to find an answer for that! (Error: ${err.message})`
      );
    return res;
  }
};

export default queryTurbo;
