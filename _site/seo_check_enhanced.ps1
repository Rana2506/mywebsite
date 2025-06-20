# SEO Checker Script for Heinrich Safety Solutions Website
# This script checks various SEO elements of your Jekyll site

Write-Host "=== Heinrich Safety Solutions - SEO Checker ===" -ForegroundColor Green
Write-Host ""

# Check if Jekyll is installed
try {
    $jekyllVersion = jekyll --version
    Write-Host "✓ Jekyll installed: $jekyllVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Jekyll not found. Please install Jekyll first." -ForegroundColor Red
    exit 1
}

# Check critical SEO files
$files = @(
    @{path="_config.yml"; desc="Jekyll configuration"},
    @{path="sitemap.xml"; desc="XML sitemap"},
    @{path="robots.txt"; desc="Robots.txt file"},
    @{path="_includes/head.html"; desc="SEO head includes"},
    @{path="_includes/seo-schema.html"; desc="Schema markup"},
    @{path="_data/seo.yml"; desc="SEO data file"}
)

Write-Host "Checking critical SEO files:" -ForegroundColor Yellow
foreach ($file in $files) {
    if (Test-Path $file.path) {
        $size = (Get-Item $file.path).Length
        if ($size -gt 0) {
            Write-Host "✓ $($file.desc) - Found ($size bytes)" -ForegroundColor Green
        } else {
            Write-Host "⚠ $($file.desc) - File exists but is empty" -ForegroundColor Yellow
        }
    } else {
        Write-Host "✗ $($file.desc) - Missing" -ForegroundColor Red
    }
}

Write-Host ""

# Check for required meta tags in head.html
if (Test-Path "_includes/head.html") {
    $headContent = Get-Content "_includes/head.html" -Raw
    
    Write-Host "Checking SEO meta tags:" -ForegroundColor Yellow
    
    $metaTags = @(
        @{tag="viewport"; pattern="viewport"},
        @{tag="description"; pattern="name=.description."},
        @{tag="keywords"; pattern="name=.keywords."},
        @{tag="og:title"; pattern="property=.og:title."},
        @{tag="og:description"; pattern="property=.og:description."},
        @{tag="twitter:card"; pattern="name=.twitter:card."},
        @{tag="canonical"; pattern="rel=.canonical."}
    )
    
    foreach ($meta in $metaTags) {
        if ($headContent -match $meta.pattern) {
            Write-Host "✓ $($meta.tag) meta tag found" -ForegroundColor Green
        } else {
            Write-Host "✗ $($meta.tag) meta tag missing" -ForegroundColor Red
        }
    }
}

Write-Host ""

# Check _config.yml for SEO settings
if (Test-Path "_config.yml") {
    $configContent = Get-Content "_config.yml" -Raw
    
    Write-Host "Checking Jekyll configuration:" -ForegroundColor Yellow
    
    $configChecks = @(
        @{setting="title"; pattern="title:"},
        @{setting="description"; pattern="description:"},
        @{setting="url"; pattern="url:"},
        @{setting="plugins"; pattern="plugins:"},
        @{setting="jekyll-sitemap"; pattern="jekyll-sitemap"},
        @{setting="jekyll-seo-tag"; pattern="jekyll-seo-tag"}
    )
    
    foreach ($check in $configChecks) {
        if ($configContent -match $check.pattern) {
            Write-Host "✓ $($check.setting) configured" -ForegroundColor Green
        } else {
            Write-Host "✗ $($check.setting) not found in config" -ForegroundColor Red
        }
    }
}

Write-Host ""

# Check for image optimization
Write-Host "Checking for images:" -ForegroundColor Yellow
if (Test-Path "assets/images") {
    $images = Get-ChildItem "assets/images" -File
    $totalSize = ($images | Measure-Object -Property Length -Sum).Sum
    $avgSize = if ($images.Count -gt 0) { [math]::Round($totalSize / $images.Count / 1KB, 2) } else { 0 }
    
    Write-Host "✓ Found $($images.Count) images, average size: $avgSize KB" -ForegroundColor Green
    
    # Check for common SEO images
    $seoImages = @("favicon.ico", "og-default.jpg", "logo.png", "apple-touch-icon.png")
    foreach ($img in $seoImages) {
        if (Test-Path "assets/images/$img") {
            Write-Host "✓ $img found" -ForegroundColor Green
        } else {
            Write-Host "⚠ $img recommended for SEO" -ForegroundColor Yellow
        }
    }
} else {
    Write-Host "✗ assets/images directory not found" -ForegroundColor Red
}

Write-Host ""

# Performance suggestions
Write-Host "SEO Recommendations:" -ForegroundColor Cyan
Write-Host "1. Install and run Jekyll plugins: bundle install" -ForegroundColor White
Write-Host "2. Update robots.txt with your actual domain" -ForegroundColor White
Write-Host "3. Add favicon.ico and other SEO images to assets/images/" -ForegroundColor White
Write-Host "4. Configure Google Search Console and Analytics" -ForegroundColor White
Write-Host "5. Submit sitemap to search engines" -ForegroundColor White
Write-Host "6. Optimize images for web (WebP format recommended)" -ForegroundColor White
Write-Host "7. Add breadcrumb navigation to product pages" -ForegroundColor White
Write-Host "8. Implement customer reviews with schema markup" -ForegroundColor White

Write-Host ""
Write-Host "To build and serve your site: jekyll serve" -ForegroundColor Green
Write-Host "To check your site after changes, run this script again." -ForegroundColor Green
