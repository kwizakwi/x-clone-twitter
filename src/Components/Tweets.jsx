import Tweet from "./tweets/Tweet";

export default function Tweets({ tweets }) {
  
  return (tweets &&
    <div className="tweets">
      {tweets.map((e, i) => (
        <Tweet key={i} data={e} />
      ))}
    </div>
  );
}
