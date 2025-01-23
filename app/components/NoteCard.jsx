/* eslint-disable react/prop-types */


const NoteCard = ({note}) => {
    const {title, author, date, description} = note
    return (
        <div className="bg-gray-900 p-4 rounded-md">
            <h3 className="text2xl text-white capitalize">{title}</h3>
            <p className="text-white text-sm">Author: {author}</p>
            <p className="mt-2 text-sm text-purple-500">Data: {date}</p>
            <p className="mt-3 text-white">{description}</p>
        </div>
    );
};

export default NoteCard;