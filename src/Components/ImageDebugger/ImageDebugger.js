import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { getImageUrl } from "../../utils/getImage";

const ImageDebugger = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testImage = () => {
    setIsLoading(true);
    setTestResult(null);

    const img = new Image();
    img.onload = () => {
      setTestResult({
        success: true,
        message: "Image loaded successfully!",
        dimensions: `${img.width} x ${img.height}`,
      });
      setIsLoading(false);
    };
    img.onerror = () => {
      setTestResult({
        success: false,
        message: "Failed to load image. Check the URL or CORS settings.",
        error: true,
      });
      setIsLoading(false);
    };
    img.src = imageUrl;
  };

  const testStrapiImage = () => {
    // Test the problematic URL you mentioned
    const problematicUrl =
      "https://res.cloudinary.com/dr8z6v6y8/image/upload/v1757453334/strapi-uploads/BULBUL_COMPUTER_01766337499_75_d42497fa71.jpg";
    setImageUrl(problematicUrl);

    // Also test with current timestamp
    const currentTimestamp = Math.floor(Date.now() / 1000);
    const fixedUrl = problematicUrl.replace(
      "v1757453334",
      `v${currentTimestamp}`
    );

    console.log("Original URL:", problematicUrl);
    console.log("Fixed URL with current timestamp:", fixedUrl);

    // Test both URLs
    testMultipleUrls([problematicUrl, fixedUrl]);
  };

  const testMultipleUrls = (urls) => {
    setIsLoading(true);
    const results = [];

    urls.forEach((url, index) => {
      const img = new Image();
      img.onload = () => {
        results.push({
          url,
          success: true,
          dimensions: `${img.width} x ${img.height}`,
        });
        if (results.length === urls.length) {
          setTestResult({ multiple: true, results });
          setIsLoading(false);
        }
      };
      img.onerror = () => {
        results.push({
          url,
          success: false,
          error: "Failed to load",
        });
        if (results.length === urls.length) {
          setTestResult({ multiple: true, results });
          setIsLoading(false);
        }
      };
      img.src = url;
    });
  };

  return (
    <Container className="my-5">
      <Row>
        <Col lg={8} className="mx-auto">
          <Card>
            <Card.Header>
              <h4>🔍 Image URL Debugger</h4>
              <small>Test and debug image URLs from Strapi/Cloudinary</small>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Image URL to Test:</Form.Label>
                <Form.Control
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="Enter image URL..."
                />
              </Form.Group>

              <div className="d-flex gap-2 mb-3">
                <Button
                  variant="primary"
                  onClick={testImage}
                  disabled={!imageUrl || isLoading}>
                  {isLoading ? "Testing..." : "Test Image URL"}
                </Button>
                <Button
                  variant="warning"
                  onClick={testStrapiImage}
                  disabled={isLoading}>
                  Test Problematic Cloudinary URL
                </Button>
              </div>

              {testResult && (
                <>
                  {testResult.multiple ? (
                    <div>
                      <h6>Multiple URL Test Results:</h6>
                      {testResult.results.map((result, index) => (
                        <Alert
                          key={index}
                          variant={result.success ? "success" : "danger"}
                          className="mb-2">
                          <strong>URL {index + 1}:</strong>{" "}
                          {result.success ? "✅ Success" : "❌ Failed"}
                          <br />
                          <small className="text-muted">{result.url}</small>
                          {result.dimensions && (
                            <>
                              <br />
                              Dimensions: {result.dimensions}
                            </>
                          )}
                          {result.error && (
                            <>
                              <br />
                              Error: {result.error}
                            </>
                          )}
                        </Alert>
                      ))}
                    </div>
                  ) : (
                    <Alert variant={testResult.success ? "success" : "danger"}>
                      <strong>
                        {testResult.success ? "✅ Success!" : "❌ Failed!"}
                      </strong>
                      <br />
                      {testResult.message}
                      {testResult.dimensions && (
                        <>
                          <br />
                          Dimensions: {testResult.dimensions}
                        </>
                      )}
                    </Alert>
                  )}
                </>
              )}

              {imageUrl && (
                <div className="mt-4">
                  <h6>Image Preview:</h6>
                  <div
                    style={{
                      maxHeight: "300px",
                      overflow: "hidden",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                    }}>
                    <img
                      src={imageUrl}
                      alt="Test"
                      style={{ width: "100%", height: "auto" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <div
                      style={{
                        display: "none",
                        padding: "20px",
                        textAlign: "center",
                        color: "#666",
                      }}>
                      ❌ Image failed to load
                    </div>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Header>
              <h5>🛠️ Common Cloudinary Issues & Solutions</h5>
            </Card.Header>
            <Card.Body>
              <ul>
                <li>
                  <strong>Timestamp Issues:</strong> Future timestamps (like
                  v1757453334) may cause issues. Current timestamp: v
                  {Math.floor(Date.now() / 1000)}
                </li>
                <li>
                  <strong>CORS Issues:</strong> Make sure Cloudinary allows your
                  domain
                </li>
                <li>
                  <strong>URL Format:</strong> Ensure the URL structure is
                  correct
                </li>
                <li>
                  <strong>File Existence:</strong> The file might have been
                  deleted from Cloudinary
                </li>
                <li>
                  <strong>Network Issues:</strong> Check if Cloudinary service
                  is accessible
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageDebugger;
