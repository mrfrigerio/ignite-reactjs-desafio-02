import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";
import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface ISideBarProps {
  selectedGenreId: number;
  genres: GenreResponseProps[];
  handleClickButton: (genreId: number) => void;
}

export const SideBar: React.FC<ISideBarProps> = ({
  selectedGenreId,
  genres,
  handleClickButton,
}: ISideBarProps) => {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
