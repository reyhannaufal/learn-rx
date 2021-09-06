interface SubtitleProps {
   text?: string;
}

export default function Subtitle({
   text = 'Default text',
}: SubtitleProps): JSX.Element {
   return <h2 className='text-xl text-yellow-300'>{text}</h2>;
}
