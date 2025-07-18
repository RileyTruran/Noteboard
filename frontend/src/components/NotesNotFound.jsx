import React from 'react'
import { NotebookIcon } from 'lucide-react'
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
        <div className="bg-primary/10 text-primary rounded-full p-8">
            <NotebookIcon className="size-10 text-primary"  />
        </div>
        <h3 className="text-2xl font-bold">No Notes Found</h3>
        <p className="text-base-content/70">
            It seems you haven't created any notes yet. Click the button below to create your first note.
        </p>
        <Link to="/create" className="btn btn-primary">
            Create Note
        </Link>
    </div>
  );
};

export default NotesNotFound;