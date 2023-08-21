interface FooterProps {
  copyRightYear: string;
}

const Footer: React.FC<FooterProps> = ({ copyRightYear }) => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; ${copyRightYear} FakeStoreNameA, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
